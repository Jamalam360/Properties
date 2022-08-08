import { assert } from "https://deno.land/std@v0.150.0/testing/asserts.ts";
import { parse } from "../mod.ts";

function test(result: Record<string, unknown>) {
    Deno.test({
        name: "exclamation_comment",
        fn() {
            assert(
                result["exclamationComment"] == undefined,
                "Key `exclamationComment` should be `undefined`",
            );
        },
    });

    Deno.test({
        name: "hash_comment",
        fn() {
            assert(
                result["hashComment"] == undefined,
                "Key `hashComment` should be `undefined`",
            );
        },
    });

    Deno.test({
        name: "key_eq",
        fn() {
            assert(
                result["keyEq"] == "value",
                "Key `keyEq` should be `value`",
            );
        },
    });

    Deno.test({
        name: "key_eq_wsp_1",
        fn() {
            assert(
                result["keyEqWsp1"] == "value",
                "Key `keyEqWsp1` should be `value`",
            );
        },
    });

    Deno.test({
        name: "key_eq_wsp_2",
        fn() {
            assert(
                result["keyEqWsp2"] == "value",
                "Key `keyEqWsp2` should be `value`",
            );
        },
    });

    Deno.test({
        name: "key_eq_wsp_3",
        fn() {
            assert(
                result["keyEqWsp3"] == "value",
                "Key `keyEqWsp3` should be `value`",
            );
        },
    });

    Deno.test({
        name: "key_eq_wsp_4",
        fn() {
            assert(
                result["keyEqWsp4"] == "value ",
                "Key `keyEqWsp4` should be `value `",
            );
        },
    });

    Deno.test({
        name: "key_col",
        fn() {
            assert(
                result["keyCol"] == "value",
                "Key `keyCol` should be `value`",
            );
        },
    });

    Deno.test({
        name: "key_col_wsp_1",
        fn() {
            assert(
                result["keyColWsp1"] == "value",
                "Key `keyColWsp1` should be `value`",
            );
        },
    });

    Deno.test({
        name: "key_col_wsp_2",
        fn() {
            assert(
                result["keyColWsp2"] == "value",
                "Key `keyColWsp2` should be `value`",
            );
        },
    });

    Deno.test({
        name: "key_col_wsp_3",
        fn() {
            assert(
                result["keyColWsp3"] == "value",
                "Key `keyColWsp3` should be `value`",
            );
        },
    });

    Deno.test({
        name: "key_col_wsp_4",
        fn() {
            assert(
                result["keyColWsp4"] == "value ",
                "Key `keyColWsp4` should be `value `",
            );
        },
    });

    Deno.test({
        name: "cities",
        fn() {
            assert(
                result["targetCities"] == "Detroit,Chicago,Los Angeles",
                "Key `targetCities` should be `Detroit,Chicago,Los Angeles`",
            );
        },
    });

    Deno.test({
        name: "ml_alpha",
        fn() {
            assert(
                result["mlAlpha"] == "abcd",
                "Key `mlAlpha` should be `abcd`",
            );
        },
    });

    Deno.test({
        name: "backslash_escape",
        fn() {
            assert(
                result["path"] == "c:\\docs\\doc1",
                "Key `path` should be `c:\\docs\\doc1`",
            );
        },
    });
}

const file = await Deno.readTextFile("./test/test.properties");
const result = parse(file);

test(result);
