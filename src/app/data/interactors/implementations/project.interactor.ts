import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from '../../../core/types/types';
import { Param } from 'src/app/core/params/param.payload';
import { NoParam } from 'src/app/core/params/no-param.paylod';
import { ProjectRequest } from '../../requests/project.request';
import { IProjectInteractor } from '../contracts/iproject.interactor';
import { GetOneProjectUsecase } from 'src/app/domain/usecases/projects-usecases/get-one-project.usecase';
import { GetManyProjectUsecase } from 'src/app/domain/usecases/projects-usecases/get-many-project.usecase';
import { RemoveProjectUsecase } from 'src/app/domain/usecases/projects-usecases/remove-project.usecase';
import { CreateProjectUsecase } from 'src/app/domain/usecases/projects-usecases/create-project.usecase';
import { UpdateProjectUsecase } from './../../../domain/usecases/projects-usecases/update-project.usecase';


@Injectable({ providedIn: 'root' })
export class ProjectInteractor implements IProjectInteractor {

    constructor(
        private getOneProjectUsecase: GetOneProjectUsecase,
        private getManyProjectUsecase: GetManyProjectUsecase,
        private removeProjectUsecase: RemoveProjectUsecase,
        private UpdateProjectUsecase: UpdateProjectUsecase,
        private createProjectUsecase: CreateProjectUsecase
    ) {
    }

    public create(project: ProjectRequest): Observable<ProjectRequest> {
        this.createProjectUsecase.execute(new Param(project));
        return of(project);
    }

    public getMany(): Observable<ProjectRequest[]> {
        const result = this.getManyProjectUsecase.execute(new NoParam());
        return result;
    }

    public getOne(slug: string): Observable<ProjectRequest> {
        return this.getOneProjectUsecase.execute(new Param(slug));
    }

    public update(project: ProjectRequest): Observable<Result> {
        return this.UpdateProjectUsecase.execute(new Param(project));
    }

    public delete(slug: string): Observable<Result> {
        return this.removeProjectUsecase.execute(new Param(slug));
    }

}