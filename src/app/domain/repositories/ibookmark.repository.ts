import { Observable } from "rxjs";
import { Bookmark } from "../entities";

export interface IBookmarkRepository {

    all(): Observable<void>;

    createBookmark(bookmark: Bookmark): Observable<void>;

    getBookmark(id: string): Observable<Bookmark>;

    updateBookmark(id: string, bookmark: Bookmark): Observable<void>;

    removeBookmark(id: string): Observable<void>;

}
