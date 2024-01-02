/** 
import { useState } from "react";

const Section=({title,description})=>{

    const [isVisible,setIsvisible]=useState(false);

    return(
        <div className="border border-black p-2 m-2">

        <h3 className="font-bold text-xl">{title}</h3>
        {isVisible? <button className="cursor-pointer"
        onClick={()=>setIsvisible(false)}>Hide</button>:
        <button className="cursor-pointer"
        onClick={()=>setIsvisible(true)}>Show</button>

}

        
        {isVisible && <p>{description}</p>}

        </div>
    );

};

const Instamart=()=>{
    return(
        <> 
        
            <h1>Instamart</h1>
            <Section 
            title={"About Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
        />

<Section 
            title={" Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
        />

<Section 
            title={"Careers"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
        />
        <Section 
            title={"About Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
        />
        
        </>
       
    )
};

export default Instamart;

*/

/*
import { useState } from "react";

const Section=({title,description,isVisible,setIsvisible})=>{

    

    return(
        <div className="border border-black p-2 m-2">

        <h3 className="font-bold text-xl">{title}</h3>
        {isVisible? <button className="cursor-pointer"
        onClick={()=>setIsvisible(false)}>Hide</button>:
        <button className="cursor-pointer"
        onClick={()=>setIsvisible(true)}>Show</button>

}

        
        {isVisible && <p>{description}</p>}

        </div>
    );

};

const Instamart=()=>{
    const [sectionConfig,setSectionConfig]=useState({
        showAbout:false,
        showTeam:false,
        showCareers:false,
        showProduct:false,
        showDetails:false,
    });
    return(
        <> 
        
            <h1>Instamart</h1>
            <Section 
            title={"About Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
           isVisible={sectionConfig.showAbout}
           setIsvisible={()=>setSectionConfig({
            showAbout:true,
        showTeam:false,
        showCareers:false,
        showProduct:false,
        showDetails:false,
           }

           )}
        />

<Section 
            title={" Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
            isVisible={sectionConfig.showTeam}
            setIsvisible={()=>setSectionConfig({
             showAbout:false,
         showTeam:true,
         showCareers:false,
         showProduct:false,
         showDetails:false,
            }
 
            )}
       />

<Section 
            title={"Careers"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
            isVisible={sectionConfig.showCareers}
           setIsvisible={()=>setSectionConfig({
            showAbout:false,
        showTeam:false,
        showCareers:true,
        showProduct:false,
        showDetails:false,
           }

           )}
       />
        <Section 
            title={"Product"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
            isVisible={sectionConfig.showProduct}
            setIsvisible={()=>setSectionConfig({
             showAbout:false,
         showTeam:false,
         showCareers:false,
         showProduct:true,
         showDetails:false,
            }
 
            )}
        />

<Section 
            title={"Details"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
            isVisible={sectionConfig.showDetails}
            setIsvisible={()=>setSectionConfig({
             showAbout:false,
         showTeam:false,
         showCareers:false,
         showProduct:false,
         showDetails:true,
            }
 
            )}
        />
        
        
        </>
       
    )
};

export default Instamart;
*/



import { useState } from "react";

const Section=({title,description,isVisible,setIsvisible})=>{

    

    return(
        <div className="border border-black p-2 m-2">

        <h3 className="font-bold text-xl">{title}</h3>
        {isVisible? 
        <>
        <button className="cursor-pointer"
        onClick={()=>setIsvisible(false)}>Hide</button>
        {isVisible && <p>{description}</p>}
        </>
        :
        <button className="cursor-pointer"
        onClick={()=>setIsvisible(true)}>Show</button>

}

        
        

        </div>
    );

};

const Instamart=()=>{
    const [visibleSection,setIsVisibleSection]=useState("about");
    return(
        <> 
        
            <h1>Instamart</h1>
            <Section 
            title={"About Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
           isVisible={visibleSection==="about"}
           setIsvisible={()=>setIsVisibleSection("about")

           }
        />

<Section 
            title={" Instamart"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
            isVisible={visibleSection==="team"}
           setIsvisible={()=>setIsVisibleSection("team")

           }
       />

<Section 
            title={"Careers"}
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "}
            isVisible={visibleSection==="careers"}
           setIsvisible={()=>setIsVisibleSection("careers")

           }
       />
        
        
        
        </>
       
    )
};

export default Instamart;
