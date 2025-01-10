import { useState } from "react";
import { toast } from "./use-toast";

interface UseImageUploadOptions {
  maxSize?: number;
  acceptedTypes?: string[];
}

export const useImageUpload = (options: UseImageUploadOptions = {}) => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB
    acceptedTypes = ["image/jpeg", "image/png", "image/webp"],
  } = options;

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    if (file.size > maxSize) {
      toast({
        variant: "destructive",
        title: "File too large",
        description: `Image must be less than ${maxSize / (1024 * 1024)}MB`,
      });
      return null;
    }

    if (!acceptedTypes.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: `Please upload ${acceptedTypes.join(", ")}`,
      });
      return null;
    }

    setSelectedImage(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    return file;
  };

  const convertToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const resetImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  return {
    selectedImage,
    imagePreview,
    handleImageSelect,
    convertToBase64,
    resetImage,
  };
};
