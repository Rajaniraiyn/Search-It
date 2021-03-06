# Search It

- Search-It is a HTML file Search engine.
- It is **very small** and all in one HTML file.
- It consist of many types of search modes Privacy Enhanced, Entire Web, etc...
- To use this go to [rajaniraiyn.github.io/Search-It/](https://rajaniraiyn.github.io/Search-It/).

## How this on privacy?

### Normal URL with trackers :

`https://www.google.com/search?source=hp&ei=_Dv7X9yYJa3H4-EPms2JiAY&q=rajaniraiyn+github&oq=rajaniraiyn+github&gs_lcp=CgZwc3ktYWIQAzoICAAQ6gIQjwE6EQguELEDEIMBEMcBEKMCEJMCOgIILjoCCAA6CAgAELEDEIMBOgsILhCxAxDHARCjAjoFCAAQsQM6CAguEMkDEJMCOggILhCxAxCDAToLCC4QsQMQyQMQkwI6BQguELEDOgUIABDJAzoICC4QxwEQrwE6BAguEAo6DQguELEDEMkDEAoQkwI6CggAELEDELEDEAo6BAgAEAo6BwguELEDEAo6BwgAELEDEAo6BggAEAoQHjoKCC4QyQMQDRCTAjoGCAAQDRAeOggIABAIEA0QHjoKCAAQCBANEAoQHjoECAAQDToECC4QDToHCAAQyQMQDToHCCEQChCgAToFCCEQoAFQhxRYk0tguk9oAHAAeACAAcQCiAGgHZIBBzEuNy44LjKYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjchs3A9JHuAhWt4zgGHZpmAmEQ4dUDCAc&uact=5`

![Before using Search It](https://i.postimg.cc/CM3t82vN/google-url-trackers.png)

### Clean URL without trackers:

`https://www.google.com/search?q=rajaniraiyn%20github`

![Using Search It](https://i.postimg.cc/L6jW3VwM/google-url-trackers-removed.png)

- While using this we can **remove unwanted URL trackers.**
- I made this as much small as possible I can. So there is **nothing else** other than I mentioned.

## Queries

- It has two types of queries

  1.  For Complete search: `https://rajaniraiyn.github.io/Search-It/?c={query}`
  2.  For Private search: `https://rajaniraiyn.github.io/Search-It/?p={query}`

- Either of them redirect queries by a JavaScript in the top of the main HTML file

```javascript
const params = new URLSearchParams(window.location.search), //collect all parameters as parms
    a = params.get("c"), //get 'c' parameter as a
    b = params.get("p"); //get 'p' parameter as b
1 != a + 1
    ? location.replace("https://google.com/search?q=" + params.get("c"))  //replaces the URL
    :
    1 != b + 1
        ? location.replace("https://duckduckgo.com/?q=" + params.get("p")) //replaces the URL
        :
        a + b + 1 == 1
            ? console.log() //do nothing
            :
            alert("Oops! Error occured please try another."); //if there is empty query in url, display error
```

**Note:**

- I am continually working on to make it a separate search engine.
- Anybody who is interested in this can improve this or join me.
