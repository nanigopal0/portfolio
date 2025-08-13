export default function EducationCard({
  degree,
  schoolName,
  year,
  address,
  result,
}) {
  return (
    <div className="w-full md:w-4/5 lg:w-3/5 flex items-center gap-8">
      <p className="text-wrap font-bold font-mono text-lg text-green-400">{year}</p>

    <div className="w-full border border-white/20 backdrop-blur-lg bg-white/10 rounded-2xl p-6">
      <p className="text-amber-300 font-medium text-center text-xl mb-6">
        {degree}
      </p>
      <div className="flex justify-between items-center">
        <div>
          <p className="school-name text-lg text-teal-400 font-medium">
            {schoolName}
          </p>
          <p className="text-sm text-gray-300">{address}</p>
        </div>
        <p className="text-sm text-fuchsia-300 font-bold">{result}</p>
      </div>
    </div>
    </div>
  );
}
