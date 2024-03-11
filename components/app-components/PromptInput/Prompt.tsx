import {
  BubbleMenu,
  Editor,
  EditorContent,
  Mark,
  mergeAttributes,
  useEditor,
} from "@tiptap/react";
import "./Prompt.scss";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const Toolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="flex flex-row-reverse items-center justify-center w-20 gap-1 p-2 bg-white border border-black rounded-lg h-9 border-opacity-5">
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleMark("importance", {
              level: 3,
              id: Math.random().toString(36).substring(7),
            })
            .run()
        }
        type="button"
        className="peer/i-3 group"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:[&>*]:fill-content-brand"
        >
          <path
            d="M10.0242 5.88086L4.77422 11.5059C4.71859 11.5652 4.64515 11.6049 4.56499 11.6189C4.48483 11.6328 4.4023 11.6204 4.32986 11.5833C4.25741 11.5463 4.19898 11.4867 4.16338 11.4135C4.12778 11.3404 4.11694 11.2576 4.1325 11.1777L4.81969 7.74039L2.11828 6.72601C2.06027 6.70431 2.00853 6.66858 1.96769 6.622C1.92686 6.57542 1.8982 6.51946 1.88427 6.4591C1.87034 6.39875 1.87158 6.33588 1.88788 6.27612C1.90417 6.21636 1.93502 6.16157 1.97766 6.11664L7.22766 0.491637C7.28329 0.432263 7.35673 0.392596 7.43689 0.37862C7.51705 0.364645 7.59958 0.37712 7.67202 0.414163C7.74447 0.451206 7.8029 0.510807 7.8385 0.583972C7.8741 0.657138 7.88494 0.739897 7.86938 0.819762L7.18031 4.26086L9.88172 5.27382C9.93931 5.29567 9.99063 5.33137 10.0311 5.37776C10.0717 5.42415 10.1001 5.47981 10.114 5.53981C10.1279 5.59982 10.1268 5.66232 10.1108 5.7218C10.0949 5.78128 10.0645 5.83591 10.0223 5.88086H10.0242Z"
            fill="#02061733"
          />
        </svg>
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleMark("importance", {
              level: 2,
              id: Math.random().toString(36).substring(7),
            })
            .run()
        }
        type="button"
        className="peer/i-2 group peer-hover/i-3:[&_*]:fill-content-brand"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:[&>*]:fill-content-brand"
        >
          <path
            d="M10.0242 5.88086L4.77422 11.5059C4.71859 11.5652 4.64515 11.6049 4.56499 11.6189C4.48483 11.6328 4.4023 11.6204 4.32986 11.5833C4.25741 11.5463 4.19898 11.4867 4.16338 11.4135C4.12778 11.3404 4.11694 11.2576 4.1325 11.1777L4.81969 7.74039L2.11828 6.72601C2.06027 6.70431 2.00853 6.66858 1.96769 6.622C1.92686 6.57542 1.8982 6.51946 1.88427 6.4591C1.87034 6.39875 1.87158 6.33588 1.88788 6.27612C1.90417 6.21636 1.93502 6.16157 1.97766 6.11664L7.22766 0.491637C7.28329 0.432263 7.35673 0.392596 7.43689 0.37862C7.51705 0.364645 7.59958 0.37712 7.67202 0.414163C7.74447 0.451206 7.8029 0.510807 7.8385 0.583972C7.8741 0.657138 7.88494 0.739897 7.86938 0.819762L7.18031 4.26086L9.88172 5.27382C9.93931 5.29567 9.99063 5.33137 10.0311 5.37776C10.0717 5.42415 10.1001 5.47981 10.114 5.53981C10.1279 5.59982 10.1268 5.66232 10.1108 5.7218C10.0949 5.78128 10.0645 5.83591 10.0223 5.88086H10.0242Z"
            fill="#02061733"
          />
        </svg>
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleMark("importance", {
              level: 1,
              id: Math.random().toString(36).substring(7),
            })
            .run()
        }
        type="button"
        className="peer/i-1 group peer-hover/i-2:[&_*]:fill-content-brand peer-hover/i-3:[&_*]:fill-content-brand "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:[&>*]:fill-content-brand"
        >
          <path
            d="M10.0242 5.88086L4.77422 11.5059C4.71859 11.5652 4.64515 11.6049 4.56499 11.6189C4.48483 11.6328 4.4023 11.6204 4.32986 11.5833C4.25741 11.5463 4.19898 11.4867 4.16338 11.4135C4.12778 11.3404 4.11694 11.2576 4.1325 11.1777L4.81969 7.74039L2.11828 6.72601C2.06027 6.70431 2.00853 6.66858 1.96769 6.622C1.92686 6.57542 1.8982 6.51946 1.88427 6.4591C1.87034 6.39875 1.87158 6.33588 1.88788 6.27612C1.90417 6.21636 1.93502 6.16157 1.97766 6.11664L7.22766 0.491637C7.28329 0.432263 7.35673 0.392596 7.43689 0.37862C7.51705 0.364645 7.59958 0.37712 7.67202 0.414163C7.74447 0.451206 7.8029 0.510807 7.8385 0.583972C7.8741 0.657138 7.88494 0.739897 7.86938 0.819762L7.18031 4.26086L9.88172 5.27382C9.93931 5.29567 9.99063 5.33137 10.0311 5.37776C10.0717 5.42415 10.1001 5.47981 10.114 5.53981C10.1279 5.59982 10.1268 5.66232 10.1108 5.7218C10.0949 5.78128 10.0645 5.83591 10.0223 5.88086H10.0242Z"
            fill="#02061733"
          />
        </svg>
      </button>
    </div>
  );
};

const Prompt = ({
  prompt,
  setPrompt,
}: {
  prompt?: string;
  setPrompt: (value: { text: string; importance: number }[]) => void;
}) => {
  const ImportanceMark = Mark.create({
    name: "importance",
    draggable: false,

    toDOM: (props: any) => {
      return ["span", { class: "highlighted-text", id: props.attrs.id }, 0];
    },
    renderHTML(this, { HTMLAttributes }) {
      const elem = document.createElement("span");
      Object.entries(
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
      ).forEach(([attr, val]) => elem.setAttribute(attr, val));

      elem.classList.add("highlighted-text");
      elem.setAttribute("contenteditable", "false");

      elem.addEventListener("click", (e) => {
        const parentRect = (e.target as HTMLElement).getBoundingClientRect();

        const clickedSpanId = (e?.target as HTMLSpanElement)?.id;
        const targetTextToRemove = (e?.target as HTMLSpanElement)?.innerText;

        const editor = this.editor;
        const nodes = editor.getJSON().content?.[0].content;

        let startFrom = 0;
        let targetTextLen = 0;
        for (let i = 0; i < nodes?.length; i++) {
          const node = nodes[i];
          if (node?.marks?.[0].attrs.id === clickedSpanId) {
            targetTextLen = node?.text?.length ?? 0;
            break;
          }
          startFrom += node?.text?.length ?? 0;
        }

        const indexFrom = startFrom;
        const indexTo = startFrom + targetTextLen + 1;

        // Calculate the relative coordinates of the click event within the parent element
        const relativeX = e.clientX - parentRect!.left;
        const relativeY = e.clientY - parentRect!.top;

        // Define the coordinates or the range where the :after pseudo-element is located
        const pseudoElementRange = {
          startX: parentRect!.width - 20, // adjust based on your design
          startY: parentRect!.height - 20, // adjust based on your design
          endX: parentRect!.width,
          endY: parentRect!.height,
        };

        // Check if the click event occurred within the pseudo-element range
        if (
          relativeX >= pseudoElementRange.startX &&
          relativeX <= pseudoElementRange.endX &&
          relativeY >= pseudoElementRange.startY &&
          relativeY <= pseudoElementRange.endY
        ) {
          this.editor.commands.deleteRange({
            from: indexFrom + 1,
            to: indexTo,
          });
          this.editor.commands.insertContentAt(
            indexFrom + 1,
            targetTextToRemove
          );
        }
      });
      return elem;
    },
    addGlobalAttributes() {
      return [
        {
          types: ["importance"],
          attributes: {
            id: {
              default: null,
              renderHTML: (attributes) => {
                return {
                  id: attributes.id || Math.random().toString(36).substring(7),
                };
              },
            },
            level: {
              default: "0",
              renderHTML: (attributes) => {
                return {
                  class: `level-${attributes.level}`,
                };
              },
              parseHTML: (element) => element.style.textAlign || "left",
            },
          },
        },
      ];
    },

    parseHTML() {
      return [{ tag: "span.highlighted-text" }];
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      ImportanceMark,
      Placeholder.configure({
        placeholder: "Describe the content you want to generate.",
      }),
    ],
    content: `<p>${prompt ?? ""}</p>`,
    onUpdate({ editor }) {
      const contents = editor
        .getJSON()
        .content?.[0]?.content?.filter((content) => content.text?.length)
        .map((content) => {
          if (content.marks?.[0].type === "importance") {
            return {
              text: content.text.trim(),
              importance: content.marks[0].attrs.level as number,
              id: content.marks[0].attrs.id as string,
            };
          }
          return {
            text: content.text.trim(),
            importance: 0,
          };
        });
      if (contents?.length) {
        setPrompt(contents.filter((c) => c.text?.length));
      }

      // Add empty space end of the line
      var hasChange = false;
      const content = editor.getJSON().content;
      if (!content?.[0].content?.length) {
        setPrompt([]);
        return;
      }
      for (let index = 1; index < content[0].content.length; index++) {
        const element = content[0].content[index];
        if (element.marks?.[0].type !== "importance") {
          continue;
        }

        if (!content[0].content[index - 1].text.endsWith(" ")) {
          content[0].content[index - 1].text =
            content[0].content[index - 1].text + " ";
          hasChange = true;
        }

        if (index === content[0].content.length - 1) {
          content[0].content.push({
            type: "text",
            text: " ",
          });
          hasChange = true;
        } else if (!content[0].content[index + 1].text.startsWith(" ")) {
          content[0].content[index + 1].text =
            " " + content[0].content[index + 1].text;
          hasChange = true;
        }
      }

      if (hasChange) {
        editor.commands.setContent(content);
      }
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-2 break-words">
        {editor && (
          <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            className="bg-white rounded-lg"
          >
            <div className="rounded-lg ring-black ring-1">
              <Toolbar editor={editor} />
            </div>
          </BubbleMenu>
        )}
        <EditorContent
          editor={editor}
          className="flex-1 bg-white max-h-[100px] max-[567px]:h-[90px] overflow-y-auto py-[1px]"
        />
        <div className="ring-1 ring-[#EBF0F3] rounded-lg max-[1240px]:hidden self-end">
          <Toolbar editor={editor} />
        </div>
      </div>
    </>
  );
};

export default Prompt;
