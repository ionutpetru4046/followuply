import React from "react";

export default function Testimonial() {
    const testimonials = [
      {
        quote: "I finally spend less time in WhatsApp figuring out which client needs a message. FollowUply pays for itself every month!",
        user: "Anna, Salon Owner",
        img: "/customers/anna.jpg"
      },
      {
        quote: "Instead of losing track of leads, my clients now return on their own—even better than I hoped.",
        user: "Miguel, Personal Trainer",
        img: "/customers/miguel.jpg"
      },
      {
        quote: "The reminders are game-changing. My bookings are more consistent, and my clients feel valued.",
        user: "Lisa, Mobile Groomer",
        img: "/customers/lisa.jpg"
      },
      {
        quote: "Keeping track of returning customers used to be a headache. FollowUply makes everything effortless and my business has grown.",
        user: "James, Barbershop Owner",
        img: "/customers/james.jpg"
      },
      {
        quote: "I love the analytics—now I can see exactly who’s due for a follow-up and never get blindsided.",
        user: "Priya, Yoga Instructor",
        img: "/customers/priya.jpg"
      },
    ];
    const [idx, setIdx] = React.useState(0);
    React.useEffect(() => {
      const id = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 8000);
      return () => clearInterval(id);
    }, [testimonials.length]);
    const t = testimonials[idx];
    return (
      <div className="flex flex-col items-center max-w-md mx-auto transition-all duration-500">
        <div className="flex items-center gap-2 mb-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full mx-1 ${
                i === idx ? "bg-indigo-600" : "bg-indigo-200"
              } transition`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
        <div className="bg-indigo-50 rounded-xl shadow-lg p-6 text-gray-900">
          <p className="text-base italic mb-4">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center gap-3">
            <img src={t.img} className="rounded-full w-8 h-8 object-cover" alt={t.user}/>
            <span className="text-sm text-gray-700 font-semibold">{t.user}</span>
          </div>
        </div>
      </div>
    );
  }