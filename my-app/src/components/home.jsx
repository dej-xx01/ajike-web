import { useEffect, useState } from "react"
import supabase from "../supabase-clients"
const Home = () =>{
    const [clickedImage, setClickedImage] = useState(null)
    const [images,setImages] = useState([])
    const fetchImages = async () =>{
        const {data: infoArray} = await supabase.storage.from("ajike-photos").list("homepage-images")
        const filteredInfoArray = infoArray.filter(item => item.name != ".emptyFolderPlaceholder")
        // Transform the file objects into public URLs
        const publicUrls = filteredInfoArray.map(file =>{
            const filePath = `homepage-images/${file.name}`
            const {data: url} = supabase.storage.from("ajike-photos").getPublicUrl(filePath)
            return url.publicUrl
        })
        console.log(publicUrls)
        setImages(publicUrls)
    }
    useEffect(() =>{
        fetchImages()
    },[])

    const viewImage = (img) =>{
        setClickedImage(img)
    }

    return(
        <section className=" min-h-screen pt-25">
            {!clickedImage ? <div className="grid grid-cols-2 px-3 gap-4">
                {images.map(image =>{
                    return (
                        <img src= {image} alt="image" className="rounded-[4px]" onClick={() => viewImage(image)}/>
                    )
                })}
            </div>: (
                <div>
                    <img src= {clickedImage} alt="image" className="rounded-[4px]" />
                    <button className="text-black bg-white p-2 font-bold" onClick={() => setClickedImage(null)}>back</button>
                </div>
                
            )}
        </section>
    )
}

export default Home