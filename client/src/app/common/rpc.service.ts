import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Issue} from "./models/issue";
import {Project} from "../../../../src/entity/Project";
import {User} from "./models/user";

@Injectable({
    providedIn: 'root'
})
export class RpcService {

    constructor(private http: HttpClient) {
    }

    public call(method: string, params: Object): Observable<object> {
        const headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
        return this.http.post('http://localhost:3001',
            {method, params, id: this.getRequestId(), jsonrpc: "2.0"},
            {headers});
    }

    protected getRequestId() {
        return new Date().getMilliseconds();
    }
}

export interface RpcRequest {
    id: any;
    jsonrpc: String;
    method: String;
    params: Object;
}

export interface RpcResponse {
    id: any;
    jsonrpc: String;
    method: String;
    error: Object;
    result: Array<Issue>;
    result: Array<Project>;
    result: Array<User>;
}

