/**
 * Created by Utente on 09/05/2017.
 */
declare namespace swapi{

   export interface PeopleResponse{

       count:number;
       next:string;
       previous:string;
       results: Array<Person>;
   }

   export interface Person{

       birth_year:string;
       created:string;
       edited:string;
       eye_color:string;
       //films
       gender:string;
       hair_color:string;
       height:string;
       homeworld:string;
       mass:string;
       name:string;
       skin_color:string;
       //species
       //starship
       url:string;
       //vehicles


   }
}