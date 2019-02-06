import {
    createDate,
    createURL,
} from 'Utils/dataProcessors';

class Column{
    constructor(name, processor = null, ignore=false){
        this.name = name;
        this.ignore = ignore;
        this.processor = processor;
    }

    process = (data) => this.processor(data)
}

const apiColumns = {
    id: new Column("ID"),
    kind: new Column("kind", null, true),
    created_at: new Column("Create on", createDate),
    updated_at:new Column("Updated on", null, true),
    accepted_at:new Column("Accepted on", createDate),
    estimate:new Column("Points"),
    story_type:new Column("Type"),
    name:new Column("Title"),
    description: new Column("Description", null, true),
    current_state:new Column("State"),
    requested_by_id:new Column("Creator"),
    url:new Column("URL", createURL),
    project_id:new Column("Project", null, true),
    owner_ids:new Column("Owners"),
    labels:new Column("Labels"),
    owned_by_id: new Column("Owned By"),
};

export default apiColumns;