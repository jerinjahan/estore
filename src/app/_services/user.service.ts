import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable,throwError  } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { User } from '../_models';
// import { UserGroup,User } from '../_model';

@Injectable({ providedIn : 'root' })

export class UserService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    baseUrlUser = "/user/GononetUserCreationService/api/v1/users";

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('choukashUser') || '{}'));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    /*** User CRUD Funcationality (Start) ***/
    // getAllUser(page: number, itemPerPage: number, request: any): Observable<any> {
    //     let filterOption = {
    //         "page": page,
    //         "searchCriteriaSet": [
    //           {
    //             "key": "isActive",
    //             "operation": "EQUAL",
    //             "value": true
    //           }
    //         ],
    //         "size": itemPerPage,
    //         "sortBy": "firstName"
    //     };
	// 	return this.http.post<any>(`${environment.apiUrl}/_user_list_by_dynamic_query`,filterOption).pipe(
	// 	map((res : any) => {
    //             return res;
    //         }),catchError( error => {
    //             console.log(error);
    //             return throwError(error);
    //         })
    //     );
    // }
    // getUserDetailsById(id : any){
    //     return this.http.get(`${environment.apiUrl}/_user_by_id/${id}`).pipe(
    //         map((res : any) => {
    //             return res;
    //         }),catchError( error => {
    //             return throwError(error);
    //         })
    //     );
    // }
    // saveUserData(data : User) {
    //     let allSelectedGroup: any = [];
    //     data.userGroupSet.forEach(element => {
    //         console.log(element);
    //         allSelectedGroup.push({
    //             groupId : element
    //         });
    //     });
    //     data.userGroupSet = allSelectedGroup;
    //     return this.http.post(`${environment.apiUrl}/user_registration`, data)
    //         .pipe(map(x => {
    //             return x;
    //         }),catchError( error => {
    //             return throwError(error);
    //         })
    //     );
    // }
    // updateUserData(data : User) {
    //     let allSelectedGroup: any = [];
    //     data.userGroupSet.forEach(element => {
    //         console.log(element);
    //         allSelectedGroup.push({
    //             groupId : element
    //         });
    //     });
    //     data.userGroupSet = allSelectedGroup;
    //     return this.http.put(`${environment.apiUrl}/_user_update`, data)
    //         .pipe(map(x => {
    //             return x;
    //         }),catchError( error => {
    //             return throwError(error);
    //         })
    //     );
    // }
    // deleteUser(id: string) {
    //     return this.http.delete(`${environment.apiUrl}${this.baseUrlUser}/${id}`,{})
    //         .pipe(map(x => {
    //             return x;
    //         }),catchError( error => {
    //             return throwError(error);
    //         })
    //     );
    // }
    /*** User CRUD Funcationality (End) ***/
    
}