import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // here to store the state of our app
  newMemberName = "";
  members :string[] = [];
  errorMessage = ""
  noofTeams:number | "" = ""
  teams:string[][] = []

  addMember(){
      if(!this.newMemberName){
        this.errorMessage = "Name can't be empty."
        return
      }
      this.errorMessage = ""
      this.members.push(this.newMemberName)
      console.log(this.members)  
      this.newMemberName="" 
  }

  onInput(member:string){
    this.newMemberName = member;
    console.log(this.newMemberName)
   }

   numberInput(number:string){
    this.noofTeams =Number(number);
    console.log(this.noofTeams)
   }

   generateTeams(){
    if(!this.noofTeams || this.noofTeams <=0 || this.noofTeams>this.members.length){
      this.errorMessage = "Invalid no of teams."
      return
    }
    
    const allMembers = [...this.members]
     while(allMembers.length){
      for(let i=0;i<this.noofTeams;i++){
        const randomIndex = Math.floor(Math.random()*allMembers.length)
        const member = allMembers.splice(randomIndex,1)[0]
        if(!member) break;
        if(this.teams[i]){
          this.teams[i].push(member)
        }else{
          this.teams[i] = [member]
        }
      }
     }

    console.log(this.teams)
    this.members = []
    this.noofTeams = ''
    this.errorMessage = ""

   }
}
