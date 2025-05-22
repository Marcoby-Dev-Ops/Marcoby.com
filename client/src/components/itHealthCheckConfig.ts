export const QUESTIONS = [
  {
    id: "employees",
    question: "How many employees use company devices?",
    options: ["1-5", "6-20", "21-50", "50+"],
    required: true,
    hint: "Knowing your team size helps us assess your risk exposure and recommend the right IT solutions for your business growth."
  },
  {
    id: "backup",
    question: "Do you have a backup and disaster recovery plan?",
    options: ["Yes", "No", "Not sure"],
    required: true,
    hint: "A solid backup plan protects your business from costly data loss and downtime."
  },
  {
    id: "updates",
    question: "How often do you update your software?",
    options: ["Automatically", "Manually", "Rarely", "Not sure"],
    required: true,
    hint: "Regular updates keep your business secure and running smoothly, reducing vulnerabilities."
  },
  {
    id: "downtime",
    question: "Have you experienced downtime in the last 6 months?",
    options: ["Yes", "No", "Not sure"],
    required: true,
    hint: "Downtime can cost your business money and reputation. Identifying causes helps prevent future issues."
  },
  {
    id: "mfa",
    question: "Do you use multi-factor authentication?",
    options: ["Yes", "No", "Not sure"],
    required: true,
    hint: "MFA is a simple way to protect your business from cyber threats and unauthorized access."
  },
  {
    id: "challenge",
    question: "What's your biggest IT challenge right now?",
    options: [
      "Security",
      "Productivity",
      "Cost",
      "Compliance",
      "Other",
    ],
    required: true,
    hint: "Understanding your main challenge helps us tailor solutions that drive your business forward."
  },
  {
    id: "industry",
    question: "What industry are you in?",
    options: [
      "Professional Services",
      "Healthcare",
      "Finance",
      "Retail",
      "Education",
      "Other",
    ],
    required: true,
    hint: "Industry-specific insights allow us to benchmark your IT health and provide relevant recommendations."
  },
]; 