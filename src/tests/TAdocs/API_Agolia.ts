import { KeyCode, TestCase, TestModule, gondola } from "@logigear/gondola";
TestModule("Manage status Agolia page");

TestCase("Testcase 01: Verify status Agolia search on TA doc", async () => {
 
    let result = await gondola.sendPostRequest("https://bh4d9od16a.algolia.net/1/indexes/testarchitect/query", {
                                                                "query":"test",
                                                                "page":0,
                                                                "hitsPerPage":0,
                                                                "facetFilters":"[\"version:9.0\"]"},
                                                                {
                                                                "Content-Type":"application/json",
                                                                "X-Algolia-Application-Id":"BH4D9OD16A",
                                                                "X-Algolia-API-Key":"4a1d8b7698168a297f94216458d117d7"
                                                            });
    await gondola.checkJSONValue(result.body, ".nbHits", [4567]);
});
