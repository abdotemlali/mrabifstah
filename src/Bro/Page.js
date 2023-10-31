import './Page.css';
type vp ={
    id: String
}
export const Page : React.fC<vp>= ({id}) => {
    return (            
<form className='bg-[#CFD8DC]'>
   <fieldset >
   <legend className=" text-2xl">CV online</legend>
  <label >Nom:<br></br>
    <input  type="text"  name="Nom" placeholder="saisir le nom:" />
  </label><br></br>
  <label >Prénom:<br></br>
    <input  type="text" placeholder="saisir le prénom:" name="prenom" />
  </label><br></br>
  <label >genre:<br></br>
    <input  type="radio" value="Male" name="gender" /> Male
    <input type="radio" value="Female" name="gender" /> Female
  </label><br></br>
  <label >email:<br></br>
    <input placeholder="abkds@gmail.com"  type="email" name="email" />
  </label><br></br>
  <label >Tel:<br></br>
    <input placeholder="Tel:"  type="number" name="Tel" />
  </label><br></br>
  <label >adress:<br></br>
    <input placeholder="votre adress"  type="address" name="prenom" />
  </label><br></br>
  <label for="objectif"> objectif:<br></br>
    <textarea  placeholder="objectif professional" name="objprf"></textarea>
    </label><br></br>
    <label> diplome :<br></br>
    <textarea  placeholder="saisir votre diplme" name="dip"></textarea><br></br>
    </label>
    <label for="diplome">Compétences technique:<br></br>
    <textarea  placeholder="saisir votre competences technique" name="tec" ></textarea> <br></br> </label>
    <label for="lin"> Compétences linguistiques: <br></br>
     <textarea  placeholder="saisir Compétences linguistiques:" name="lin"></textarea>
     </label><br></br>
     <label> soft skills:<br></br>
     <textarea  placeholder="saisir votre soft skills" name="skills"></textarea><br></br>
     </label>
     <input type="submit" className="bg-[#fccb00] hover:bg-[#9A7F01]"/>
  </fieldset>
</form>
    )
}