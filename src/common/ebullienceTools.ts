
import { Dispatch } from "redux";
import {
    AppError,
    ErrorCode,
    IApplicationState,
    IAppSettings,
    IAsset,
    IAssetMetadata,
    IProject,
    ITag,
    ISecurityToken,
    FieldType,
    FieldFormat,
    ITableConfigItem,
    ITableTag,
    ITableField,
    TableVisualizationHint
} from "../../src/models/applicationState";
import { ensureSecurityTokenAction, saveAppSettings, saveAppSettingsAction } from "../redux/actions/applicationActions";

export class EbullienceTools{

    // public static async ensureEbullienceSecurityTokensExist(appSettings: IAppSettings) {
        
    //     console.log("appSettings");
    //     console.log(appSettings);

    //     let aToken: ISecurityToken;
    //     aToken = appSettings.securityTokens.find((token) => token.name === "mldb2vert Token");

    //     if(!aToken){
    //         let aaToken = this.mlToken();
    //         const updatedAppSettings: IAppSettings = {
    //             securityTokens: [...appSettings.securityTokens, aaToken],
    //         };
    //         await saveAppSettings(updatedAppSettings);
    //         // await saveAppSettingsAction(updatedAppSettings)
    //         await ensureSecurityTokenAction(updatedAppSettings);
    //     }

    // }

    public static mlToken(){
        let token: ISecurityToken = {
            name: "mldb2vert Token",
            key: "v+w96HmOBWH4bPEbm9sSHZUo9JGeKv76nvbhtj7cm5k="
        };
        // token.name = "mldb2vert Token";
        // token.key = "v+w96HmOBWH4bPEbm9sSHZUo9JGeKv76nvbhtj7cm5k=";

        return token;
    }
}

