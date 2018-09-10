import { Image } from "./helpers/image.model";
import { Base } from "./base/base.model";

export class Candidate extends Base<Candidate>{

    name: string;
    image: Image;

}