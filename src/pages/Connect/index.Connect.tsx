/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import Loader from "@/components/Loader/Loader";

const Connect = () => {
  // ================= FORM STATE =================

  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    subject: "",
    message: "",
  });

  // ================= LOADING =================

  const [loading, setLoading] = useState(false);

  // ================= HANDLE CHANGE =================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= SEND EMAIL =================

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ================= PREVENT DOUBLE SUBMIT =================

    if (loading) return;

    setLoading(true);

    try {
      // ================= SEND EMAIL =================

      await emailjs.send(
        "service_2404",
        "template_2404",
        {
          to_name: "Amol Pawar",
          from_name: formData.from_name,
          email_id: formData.email_id,
          subject: formData.subject,
          message: formData.message,
        },
        "TC7NUKSfYhOufN3tJ",
      );

      // ================= AUTO REPLY =================
      //todo : EmailJS Automatically handles auto reply
      //todo : Auto reply template => template_auto_replay
      //todo : Service => service_2404
      // await emailjs.send( 
      // "service_2404", 
      // "template_auto_replay", 
      //   { 
      //     from_name: formData.from_name,
      //     email_id: formData.email_id, 
      //     subject: formData.subject, 
      //     message: formData.message, 
      //   }, 
      //   "TC7NUKSfYhOufN3tJ" 
      // );
      // ================= SUCCESS ALERT =================

      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
        text: "Please check your email for confirmation.",
        timer: 2500,
        showConfirmButton: false,
      });

      // ================= RESET FORM =================

      setFormData({
        from_name: "",
        email_id: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      // ================= ERROR ALERT =================

      Swal.fire({
        icon: "error",
        title: "Failed To Send Message",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= GLOBAL LOADER ================= */}

      {loading && <Loader />}

      <div className="container">
        {/* ================= TITLE ================= */}

        <div className="row">
          <div className="section-title padd-15">
            <h2>Connect Me</h2>
          </div>
        </div>

        <h3 className="connect-title padd-15">Have Any Questions?</h3>

        <h4 className="connect-sub-title padd-15">
          I'M VERY RESPONSIVE TO MESSAGES
        </h4>

        {/* ================= FORM ================= */}

        <div className="row">
          <form className="connect-form padd-15" onSubmit={sendEmail}>
            {/* ================= NAME + EMAIL ================= */}

            <div className="row">
              <div className="form-item col-6 padd-15">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="form-item col-6 padd-15">
                <input
                  type="email"
                  name="email_id"
                  placeholder="Email"
                  value={formData.email_id}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            {/* ================= SUBJECT ================= */}

            <div className="row">
              <div className="form-item col-12 padd-15">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            {/* ================= MESSAGE ================= */}

            <div className="row">
              <div className="form-item col-12 padd-15">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            {/* ================= BUTTON ================= */}

            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn" disabled={loading}>
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Connect;
