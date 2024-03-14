import { FormEvent, useRef, useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
  accept?: string;
}

export const TextMessageBoxFile = ({
  onSendMessage,
  placeholder,
  accept = "image/*",
  disableCorrections = false,
}: Props) => {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const hanldeSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.trim().length) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={hanldeSendMessage}
      className="flex felx-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="mr-3">
        <button
          type="button"
          onClick={() => inputFileRef.current?.click()}
          className="text-gray-800 hover:text-indigo-500"
        >
          <i className="fa-solid fa-paperclip text-xl" />
        </button>
        <input
          type="file"
          ref={inputFileRef}
          hidden
          accept={accept}
          onChange={(event) => setSelectedFile(event.target.files?.item(0))}
        />
      </div>
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeholder}
            autoComplete={disableCorrections ? "on" : "off"}
            autoCorrect={disableCorrections ? "on" : "off"}
            spellCheck={disableCorrections ? "true" : "false"}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary" disabled={!selectedFile}>
          {!selectedFile ? (
            <span className="mr-2">Enviar</span>
          ) : (
            <span className="mr-2">
              {selectedFile.name.substring(0, 10) + "..."}
            </span>
          )}
          <i className="fa-regular fa-paper-plane" />
        </button>
      </div>
    </form>
  );
};
