//Create EditorState class  A simple, immutable object that holds the state of the Originator.
public class EditorState {
    private final String content;

    public EditorState(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}


//Create Editor class This is the object whose state you want to save/restore.
public class Editor {
    private String content;

    public EditorState createState() {
        return new EditorState(content);
    }

    public void restore(EditorState state) {
        content = state.getContent();
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}

//Create History class  Manages a list/stack of mementos.
import java.util.Stack;

public class History {
    private Stack<EditorState> history = new Stack<>();

    public void push(EditorState state) {
        history.push(state);
    }

    public EditorState pop() {
        history.pop();
        return history.peek();
    }
}

//Create Main class
public class Main {
    public static void main(String[] args) {
        var editor = new Editor();
        var history = new History();

        editor.setContent("a");
        history.push(editor.createState());

        editor.setContent("b");
        history.push(editor.createState());

        editor.setContent("c");
        history.push(editor.createState());

        System.out.println(editor.getContent());

        editor.restore(history.pop());
        System.out.println(editor.getContent());

        editor.restore(history.pop());
        System.out.println(editor.getContent());
    }
}
