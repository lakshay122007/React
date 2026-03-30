//https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg

import Logo from "../Logo.jpeg"
function NewHeader(){
    return (
        <div>
            <div>
                <img src = {Logo}/>
            </div>
            <div>
                <p>Welcome People</p>
            </div>
        </div>   
    )
}

export default NewHeader;