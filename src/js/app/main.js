import Global from './global';
import ScrollContent from "./scrollContent";
import Menu from "./menu";
import Snippets from "./snippets";


export default class Main extends Global {
    constructor () {
        super();

        new ScrollContent();
        new Menu();
        new Snippets();
    }


}