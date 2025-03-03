"use client";

export async function fetchGeneratedBio({
  role,
  vibe,
  additionalContext,
  language,
}: {
  role: string;
  vibe: string;
  additionalContext: string;
  language: string;
}) {
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL || "";

  const prompt = `Generate a compelling LinkedIn bio for a ${role} role that showcases a professional's unique value, 
  expertise, and achievements in a way that captures attention and builds credibility.
${additionalContext ? `Additional Context: ${additionalContext}` : ""}

Follow these guidelines:
1. Style: Make it engaging, and authentic with ${vibe} vibe.

2. Structure:
   - Hook: Start with a powerful opener that defines your professional identity in a captivating way.
   - Impact: Highlight 1-2 specific achievements, showcasing the kind of problems you solve, for whom, and the tangible results you’ve delivered.
   - Expertise: Clearly outline your core technical skills, specializations, and industry focus.
   - Value Proposition: Describe what makes you unique—your approach, methodology, or perspective that differentiates you from others.
   - Vision & CTA: Conclude with a strong statement about your professional purpose, mission, or an engaging call to action.

3. Must Include:
   - At least one quantifiable achievement.
   - Clear mention of current role, focus, and expertise level.
   - Key technical skills and specializations relevant to ${role} role.
   - A touch of professional passion or motivation that drives your work

4. Tone & Style:
    -Engaging and authentic (avoid generic corporate jargon).
    -Clear and concise (no fluff, every sentence adds value).
    -Optional: A touch of personality to make it memorable

5. Format:
   - Length: 2-3 concise paragraphs (300-400 characters)
   - Tone: Confident but approachable
   - Voice: First-person narrative
   ${
     language === "id"
       ? "Tulis dalam bahasa Indonesia yang profesional dan natural, seperti yang biasa digunakan di lingkungan kerja atau dunia profesional. Pastikan responsnya lengkap dan tidak terpotong. Gunakan bahasa yang jelas dan mengalir tanpa terdengar kaku, tetapi tetap profesional. Jangan menerjemahkan nama profesi/role serta istilah teknis yang sudah umum digunakan dalam bahasa Inggris."
       : ""
   }

6. Avoid:
   - Generic buzzwords and clichés
   - Personal information unrelated to career
   - Overly formal or casual language
   - Translation notes or word/character counts
   - Any explanatory notes at the bottom`;

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
      }),
    });

    // console.log("generate promtp :", prompt);

    const data = await response.json();
    return (
      data.response ||
      data.choices?.[0]?.text ||
      "Failed to generate bio. Please try again."
    );
  } catch (error) {
    throw new Error("Something went wrong. Please try again.");
  }
}
