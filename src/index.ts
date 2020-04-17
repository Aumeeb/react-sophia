import { reallog } from "./reallog";


reallog.info("View all Semantic-Org Repos ")
reallog.success("View all Semantic-Org Repos ")
reallog.failure("View all Semantic-Org Repos ")

let a = 5;
let b = 10
reallog.expect("123", "!==", "123")
reallog.expect("123", "==", 123)
reallog.expect("123", "===", 123)
