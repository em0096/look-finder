export default function LookCard({look}){
    console.log("IMG URL:", look.imageURL);
    return(
        <article className="" >
           <img src={look.imageURL} alt={look.title} className="w-full h-auto"/>
           <h3>{look.title}</h3>
           
        </article>
    );
}