module.exports = flattenJSON;

function flattenJSON(json, prefix, env){

    for(key in json){

        var item = json[key];

        if (typeof item == 'object'){

            flattenJSON(item, key.toUpperCase() + '_', env);
        } else {

            env[prefix + key.toUpperCase()] = json[key];
        }
    };

    return env;
}
