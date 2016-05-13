// cache previously loaded data

/*
 * Advantages:
 *  - loads previous page/s quicker
 * Disadvantages:
 *  - client-side code gets more complex
 * Do the benefits outweigh the complexities?
 * How frequent users view previously loaded data?
 * Or just make http request as normal, chances are,
 * DB server caches those requests anyway.
 *
 */

// a complex state shape
users: {
  data: {
    1: {
      page: 1,
      items: [],
      prev: '',
      next: ''
    },
    7: {
      page: 7,
      items: [],
      prev: '',
      next: ''
    },
    3: {
      page: 3,
      items: [],
      prev: '',
      next: ''
    }
  },
  paging: {
    current: 3,
    offset: 0,
    limit: 10,
    total: 100
  },
  invalidated: false,
  fetching: false,
  fetchedOn: '2016-05-12T08:00:06'
}

// simple state shape
users: {
  data: []
  paging: {
    current: 3,
    offset: 0,
    limit: 10,
    total: 100
    // or use next and prev urls
  },
  invalidated: false,
  fetching: false,
  fetchedOn: '2016-05-12T08:00:06'
}

