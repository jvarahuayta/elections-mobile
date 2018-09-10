import { Base } from "./base/base.model";
import { User } from "./user.model";
import { Candidate } from "./candidate.model";

export class Vote extends Base<Vote>{
 
    user: User;
    candidate: Candidate;
    
}