import React from "react";
const Contact = () => {
  return (
    <div className="bodyContact">
      <p>
        Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste
        ou pour passer le temps pendant ce confinement ? Remplissez le
        formulaire ci-dessous, je vous contacterai dès que je le peux.
      </p>
      <form className="form MarkdownInput">
        <input className="input" type="text" name="title" placeholder="Sujet" />
        <textarea className="textarea" placeholder="Description ..."></textarea>
      </form>
    </div>
  );
};
export default Contact;
