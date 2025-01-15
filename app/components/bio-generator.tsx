"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Sparkles, Copy } from "lucide-react";
import { toast } from "react-hot-toast";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "";

const vibeOptions = [
  {
    name: "Professional",
    description:
      "Perfect for corporate roles, focuses on achievements and expertise",
  },
  {
    name: "Creative",
    description: "Ideal for designers, artists, and innovative roles",
  },
  {
    name: "Casual",
    description:
      "Friendly and approachable, great for startups and social media",
  },
  {
    name: "Enthusiastic",
    description:
      "Energetic and passionate, perfect for community-focused roles",
  },
  {
    name: "Technical",
    description:
      "Detailed and precise, ideal for technical and specialized roles",
  },
  {
    name: "Leadership",
    description: "Emphasizes vision and team management experience",
  },
];

export function BioGenerator() {
  const [role, setRole] = useState("");
  const [vibe, setVibe] = useState("professional");
  const [additionalContext, setAdditionalContext] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBio, setGeneratedBio] = useState("");
  const [isCopying, setIsCopying] = useState(false);

  async function generateBio() {
    if (!role) {
      toast.error("Please enter your role first!");
      return;
    }

    setIsGenerating(true);
    setGeneratedBio("");

    const prompt = `Create a compelling LinkedIn bio for a ${role}.
Additional Context: ${additionalContext || "N/A"}
Follow these guidelines:
1. Style: Make it ${vibe}, engaging, and authentic.
2. Structure:
   - Start with a powerful hook.
   - Highlight expertise, impact, and measurable achievements.
   - Include relevant technical skills.
   - Showcase passion and unique value proposition.
   - End with a strong call to action or future aspirations.
3. Length: Keep it concise (2-3 short paragraphs).
4. Tone: Confident but approachable.
5. Use first-person narrative.`;

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

      const data = await response.json();
      setGeneratedBio(
        data.response ||
          data.choices?.[0]?.text ||
          "Failed to generate bio. Please try again."
      );
      toast.success("Your bio is ready! ✨");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleCopy() {
    setIsCopying(true);
    try {
      await navigator.clipboard.writeText(generatedBio);
      toast.success("Bio copied to clipboard! ✨");
    } catch (error) {
      toast.error("Failed to copy. Please try again.");
    }
    setTimeout(() => {
      setIsCopying(false);
    }, 1500);
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <Card className="p-4 sm:p-6 md:p-8 shadow-lg border-2 border-indigo-500 bg-gradient-to-br from-indigo-100 to-white">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="role"
              className="text-base sm:text-lg font-semibold text-indigo-700 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              What's your role?
            </Label>
            <Input
              id="role"
              placeholder="e.g. Senior Software Engineer at Google"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border-2 border-indigo-300 focus:ring-4 focus:ring-indigo-200 text-sm sm:text-base"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base sm:text-lg font-semibold text-indigo-700">
              🎨 Choose your vibe
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {vibeOptions.map((vibeOption) => (
                <Card
                  key={vibeOption.name.toLowerCase()}
                  className={`p-3 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    vibe === vibeOption.name.toLowerCase()
                      ? "border-2 border-indigo-500 bg-indigo-50"
                      : "border border-gray-200 hover:border-indigo-300"
                  }`}
                  onClick={() => setVibe(vibeOption.name.toLowerCase())}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-semibold text-sm sm:text-base text-indigo-700 mb-1">
                      {vibeOption.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                      {vibeOption.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="additionalContext"
              className="text-base sm:text-lg font-semibold text-indigo-700"
            >
              📝 Additional details
            </Label>
            <Textarea
              id="additionalContext"
              placeholder="Share your achievements, passions, or specific skills..."
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
              className="border-2 border-indigo-300 focus:ring-4 focus:ring-indigo-200 min-h-[100px] text-sm sm:text-base"
            />
          </div>

          <Button
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-indigo-500 shadow-md text-sm sm:text-base transition-all duration-300"
            size="lg"
            onClick={generateBio}
            disabled={!role || isGenerating}
          >
            {isGenerating ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm sm:text-base">
                  Crafting your bio...
                </span>
              </div>
            ) : (
              <span className="text-sm sm:text-base">Generate Bio ✨</span>
            )}
          </Button>
        </div>
      </Card>

      <AnimatePresence>
        {generatedBio && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6"
          >
            <Card className="p-4 sm:p-6 shadow-lg border-2 border-green-400 bg-gradient-to-br from-green-100 to-white">
              <Label className="text-base sm:text-lg font-semibold text-green-700">
                🚀 Your Generated Bio
              </Label>
              <Textarea
                className="mt-2 sm:mt-4 min-h-[150px] sm:min-h-[200px] border-2 border-green-300 focus:ring-4 focus:ring-green-200 text-sm sm:text-base"
                value={generatedBio}
                readOnly
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className={`mt-4 w-full sm:w-auto flex items-center justify-center gap-2 ${
                    isCopying
                      ? "border-green-500 bg-green-100 text-green-700"
                      : "border-green-400 hover:bg-green-100"
                  } text-sm sm:text-base transition-all duration-300`}
                  onClick={handleCopy}
                  disabled={isCopying}
                >
                  <motion.div
                    animate={isCopying ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {isCopying ? (
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </motion.div>
                  {isCopying ? "Copied!" : "Copy to Clipboard"}
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BioGenerator;
