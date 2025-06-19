import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import {
  getDownloadURL,
  listAll,
  ref,
  Storage,
  StorageReference,
} from '@angular/fire/storage';
import { collection, CollectionReference } from 'firebase/firestore';
import { Observable, toArray } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private firestore = inject(Firestore); // Database
  private readonly storage: Storage = inject(Storage); // Storage bucket

  private collectionName = 'projects';
  private projectsCollection: CollectionReference;

  constructor() {
    // Get a reference to the 'projects' collection
    this.projectsCollection = collection(this.firestore, this.collectionName);
  }

  // handles fetching all projects data from firestore db
  public getAllProjects(): Observable<Project[]> {
    return collectionData(this.projectsCollection) as Observable<Project[]>;
  }

  // handles fetching only the projects where 'featured' = true
  public getFeaturedProjects(): Observable<Project[]> {
    return collectionData(this.projectsCollection) as Observable<Project[]>;
  }

  // handles getting the download url for a specific project image file
  public getImageUrl(filename: string): Promise<string> {
    return getDownloadURL(ref(this.storage, `images/${filename}`));
  }
}
