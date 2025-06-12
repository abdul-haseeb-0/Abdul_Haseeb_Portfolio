import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields before sending.",
        variant: "destructive"
      });
      return;
    }
    
    // Create mailto link to open user's email client
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:abdulhaseebmirza69@gmail.com?subject=${subject}&body=${body}`;
    
    try {
      // Open user's email client
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Email Client Opened",
        description: "Your email client should open with the message pre-filled. Please send it from there.",
      });
      
      // Clear form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to open email client. Please try copying the email address manually.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card>
      <CardContent className="pt-6">
        {/* Contact form fields removed as requested */}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
