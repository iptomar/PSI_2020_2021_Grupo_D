import React,{useState} from 'react'

class PostForm extends React.Component{
    constructor(props) {
        super(props)
        this.state={nome:"",story:"",file:null};
        const [selectedFile, setSelectedFile] = useState();
        const [isFilePicked, setIsFilePicked] = useState(false);
    }
    
    //needs finishing
    submitHandler =(event) => {
        event.preventDefault();
    }


    changeHandler=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]: value});
    }


    fileChangeHandler=(event)=>{
        let imageFile=event.target.file[0];
        if (!imageFile) {
            this.setState({ invalidImage: 'Please select image.' });
            return false;
          }
         
        else if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            this.setState({ invalidImage: 'Please select valid image.' });
            return false;
          }
        else{
            setSelectedFile(imageFile);
            setIsFilePicked(true);
        }

    }
    
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <button onClick={this.close}>Voltar ao Mapa</button>
                <label>Conte-nos como foi a sua experiencia</label>
                <p>Seu nome:</p>
                <input type="text" name ='nome' onChange={this.changeHandler} />
                <p>Sua história:</p>
                <input type="text" name="story" onChange={this.changeHandler} />
                <p>Fotografias</p>
                <input type="file" name="file" onChange={this.fileChangeHandler} />
                <input type ="submit">Submeter</input>
            </form>
        )
    }
    }
    export default PostForm;