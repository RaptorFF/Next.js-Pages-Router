import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const contactData = {
    full_name: "Fikos",
    email: "test@example.com",
    subject: "Booking",
    message: "HEY THERE",
  };

  const { error } = await supabase.from("contacts").insert(contactData);

  if (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
    });
  }

  res.status(200).json({
    success: true,
    message: "Contact form submitted successfully",
  });
}
