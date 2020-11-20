# Search It
*   Search-It is a HTML file Search engine.
*   It is **very small** and all in one HTML file.
*   It consist of many types of search modes Privacy Enhanced, Entire Web, etc...
*   To use this go to rajaniraiyn.github.io/Search-It/.

## How this on privacy?
*   While using this we can **remove unwanted URL trackers.**
*   I made this as much small as possible I can. So there is **nothing else** other than I mentioned.

## Queries
*   It has two types of queries
   1.  For Complete search: https://rajaniraiyn.github.io/Search-It/?c={query}
   2.  For Private search: https://rajaniraiyn.github.io/Search-It/?p={query}

*   Either of them redirect queries by a JavaScript in the top of the main HTML file

```javascript
const params=new URLSearchParams(window.location.search),  //collect all parameters as parms
	  a=params.get("c"),  //get 'c' parameter as a
	  b=params.get("p");  //get 'p' parameter as b
1!=a+1?location.replace("https://google.com/search?q="+params.get("c")): //if 'a' exists, replace url
1!=b+1?location.replace("https://duckduckgo.com/?q="+params.get("p")):  //if 'b' exists, replace url
a+b+1==1?console.log():  //if both exists, do nothing
alert("Oops! Error occured please try another"); //if there is empty query, display error
```

**Note:**
*   I am continually working on to make it a separate search engine.
*   Anybody who is interested in this can improve this or join me.
