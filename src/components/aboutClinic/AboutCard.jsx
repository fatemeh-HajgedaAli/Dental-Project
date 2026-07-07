export default function AboutCard({ title, description }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-sky-100 max-w-md">
      <h3 className="text-xl font-bold text-sky-800 mb-4">{title}</h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}