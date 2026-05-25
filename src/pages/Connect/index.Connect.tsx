"use client";

export default function Contact() {
  const handleSubmit = () => {
    alert("Form Submitted");
  };

  return (
    <section className="contact section" id="Contact">
      <h2>Contact Me</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Subject" />
      <textarea placeholder="Message"></textarea>

      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
}