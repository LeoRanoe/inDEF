import React from "react";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export default function ContactEmailTemplate(data: ContactData) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#1a1a1a", marginBottom: "20px" }}>
          New Inquiry from inDEF Website
        </h2>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
          <p style={{ margin: "10px 0", color: "#555" }}>
            <strong>Name:</strong> {data.name}
          </p>
          <p style={{ margin: "10px 0", color: "#555" }}>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${data.email}`} style={{ color: "#0066cc" }}>
              {data.email}
            </a>
          </p>
          <p style={{ margin: "10px 0", color: "#555" }}>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${data.phone}`} style={{ color: "#0066cc" }}>
              {data.phone}
            </a>
          </p>
          <p style={{ margin: "10px 0", color: "#555" }}>
            <strong>Inquiry Type:</strong> {data.inquiryType}
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p style={{ color: "#555", fontWeight: "bold", marginBottom: "10px" }}>
            Message:
          </p>
          <p
            style={{
              color: "#555",
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "4px",
              borderLeft: "4px solid #d4af37",
              whiteSpace: "pre-wrap",
            }}
          >
            {data.message}
          </p>
        </div>

        <p style={{ color: "#999", fontSize: "12px", marginTop: "30px" }}>
          This email was sent from your inDEF Design & Construction N.V. website contact form.
        </p>
      </div>
    </div>
  );
}
