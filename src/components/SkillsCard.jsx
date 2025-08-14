export default function SkillsCard({skill}){

    return(
        <div className="border  border-white/30 p-3 backdrop-blur-lg rounded-xl bg-purple-500/50">
            <p className="text-center text-lg font-mono ">{skill}</p>
        </div>
    )
};