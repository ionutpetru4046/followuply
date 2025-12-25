export default function FeatureCard({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  