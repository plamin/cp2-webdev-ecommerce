
export default function RepoCard({ image, title, description, price}) {
  return (
    <div className={`flex items-center justify-between border rounded-lg p-4 border-red-700 shadow hover:scale-102 transition transform duration-200`}>
      <div className="p-1.5">
        <img src={image} alt="" />
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <p className="text-sm text-white mt-1 font-bold">R$ {price}</p>
       </div>
    </div>
  );
}
