import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {

    base       : number;
    limit      : number;
    showTable  : boolean;
    destination: string;
    filename   : string;
}

export class ServerApp {


    static run({ base, showTable, limit, destination, filename}: RunOptions){

        console.log('Server running...');
        const table = new CreateTable().execute({ base, limit});
        const wasCreated = new SaveFile().execute({fileContent: table, destination, filename})

        if(showTable) console.log(table);

        ( wasCreated )
            ? console.log('File created successfully')
            : console.log('File not created successfully');

    }

}

