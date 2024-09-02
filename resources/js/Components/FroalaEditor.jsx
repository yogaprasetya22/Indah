import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
// import "froala-editor/js/plugins/fullscreen.min.js"

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
// import "froala-editor/css/plugins/fullscreen.min.css";

import Froala from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import Tribute from "tributejs";
import "tributejs/dist/tribute.css";

const options = {
    trigger: "@",
    values: [
        {
            key: "1",
            first_name: "Delia",
            last_name: "Manea",
            fullName: "Delia Manea",
            slug: "deliamanea",
        },
        {
            key: "2",
            first_name: "Greg",
            last_name: "Forel",
            fullName: "Greg Forel",
            slug: "gregforel",
        },
    ],
    lookup: (user) => user.first_name + " " + user.last_name,
    fillAttr: "fullName",
    allowSpaces: true,
    selectTemplate: function (item) {
        return renderToString(
            <span className="fr-deletable fr-tribute">
                <a>@{item.original.fullName}</a>
            </span>
        );
    },
};

export const FroalaEditor = ({ model, setModel }) => {
    const ref = useRef({ editor: null });
    const [isFroalaInitialized, setIsFroalaInitialized] = useState(false);
    const tribute = new Tribute(options);
    const [editor, setEditor] = useState(undefined);

    const handleModelChange = (model) => {
        setModel(model);
    };

    // Editor initialization
    useEffect(() => {
        setEditor(ref.current.editor);
        editor && setIsFroalaInitialized(true);
        console.log("tes", <Froala />);
    }, [ref.current]);

    // Do after initialization
    useEffect(() => {
        if (isFroalaInitialized) {
            tribute.attach(editor.el);
            editor.html.set(model);
        }
    }, [isFroalaInitialized]);

    const config = {
        attribution: false,
        placeholder: "Start typing...",
        toolbarButtons: {
            moreText: {
                buttons: [
                    "bold",
                    "italic",
                    "underline",
                    "strikeThrough",
                    "subscript",
                    "superscript",
                    "fontFamily",
                    "fontSize",
                    "textColor",
                    "backgroundColor",
                    "inlineClass",
                    "inlineStyle",
                    "clearFormatting",
                ],
            },
            moreParagraph: {
                buttons: [
                    "alignLeft",
                    "alignCenter",
                    "formatOLSimple",
                    "alignRight",
                    "alignJustify",
                    "formatOL",
                    "formatUL",
                    "paragraphFormat",
                    "paragraphStyle",
                    "lineHeight",
                    "outdent",
                    "indent",
                    "quote",
                ],
            },
            moreRich: {
                buttons: [
                    "insertLink",
                    "insertImage",
                    "insertVideo",
                    "insertTable",
                    "emoticons",
                    "fontAwesome",
                    "specialCharacters",
                    "embedly",
                    "insertFile",
                    "insertHR",
                ],
            },
            moreMisc: {
                buttons: [
                    "undo",
                    "redo",
                    "fullscreen",
                    "print",
                    "getPDF",
                    "spellChecker",
                    "selectAll",
                    "html",
                    "help",
                ],
                align: "right",
                buttonsVisible: 2,
            },
        },
        pluginsEnabled: [
            "table",
            "spell",
            "quote",
            "save",
            "quickInsert",
            "paragraphFormat",
            "paragraphStyle",
            "help",
            "draggable",
            "align",
            "link",
            "lists",
            "file",
            "image",
            "emoticons",
            "url",
            "video",
            "embedly",
            "colors",
            "entities",
            "inlineClass",
            "inlineStyle",
            // 'codeBeautif '
            // 'spellChecker',
            "imageTUI",
        ],
    };

    return (
        <div className="App">
            <Froala
                ref={ref}
                model={model}
                onModelChange={handleModelChange}
                tag="textarea"
                config={config}
            />
            <code>
                {JSON.stringify(model, null, 2)}
            </code>
        </div>
    );
};
