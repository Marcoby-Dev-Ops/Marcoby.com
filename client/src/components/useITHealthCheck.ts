import { useState } from "react";
import { QUESTIONS } from "./itHealthCheckConfig";

export const API_URL = "https://api.marcoby.net/techCheck";

export function useITHealthCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [QUESTIONS[step].id]: option });
    setError("");
  };

  const handleNext = () => {
    if (!answers[QUESTIONS[step].id]) {
      setError("Please select an option to continue.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
    setError("");
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid business email.");
      return;
    }
    setEmailError("");
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, email, companyName }),
      });
      if (!response.ok) {
        throw new Error("Submission failed. Please try again.");
      }
      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    step,
    setStep,
    answers,
    setAnswers,
    email,
    setEmail,
    companyName,
    setCompanyName,
    emailError,
    setEmailError,
    submitting,
    setSubmitting,
    error,
    setError,
    result,
    setResult,
    showModal,
    setShowModal,
    showButton,
    setShowButton,
    handleOptionSelect,
    handleNext,
    handleBack,
    handleSubmit,
    QUESTIONS,
  };
} 