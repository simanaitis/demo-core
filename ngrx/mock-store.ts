import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export class MockStore<T> extends BehaviorSubject<T> {
    public topic: any;

    constructor(private _initialState: T) {
        super(_initialState);
    }

    public loadSomeData(data): void {
        this.topic.next(data);
    }

    public dispatch = (action: Action): void => {

    }

    public select = <T, R>(pathOrMapFn: any, ...paths: string[]): Observable<R> => {
        return Observable.create((observer) => {
            this.topic = observer;

            return () => {
            };
        });
    }
}
