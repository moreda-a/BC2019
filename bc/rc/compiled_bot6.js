var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
var bc19;
(function (bc19) {
    var HashMapInterfaceIM;
    (function (HashMapInterfaceIM) {
        HashMapInterfaceIM.STARTING_SIZE = 10;
        HashMapInterfaceIM.MAX_LOAD_FACTOR = 0.67;
    })(HashMapInterfaceIM = bc19.HashMapInterfaceIM || (bc19.HashMapInterfaceIM = {}));
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Action = (function () {
        function Action(signal, signalRadius, logs, castleTalk) {
            this.signal = 0;
            this.signal_radius = 0;
            this.logs = null;
            this.castle_talk = 0;
            this.signal = signal;
            this.signal_radius = signalRadius;
            this.logs = logs;
            this.castle_talk = castleTalk;
        }
        return Action;
    }());
    bc19.Action = Action;
    Action["__class"] = "bc19.Action";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var FastMath = (function () {
        function FastMath() {
        }
        FastMath.lookupRand256Length_$LI$ = function () { if (FastMath.lookupRand256Length == null)
            FastMath.lookupRand256Length = FastMath.lookupRand256.length; return FastMath.lookupRand256Length; };
        ;
        FastMath.floorSqrt = function (x) {
            return (FastMath.lookupFloorSqrt.charAt(x)).charCodeAt(0);
        };
        FastMath.roundSqrt = function (x) {
            return (FastMath.lookupRoundSqrt.charAt(x)).charCodeAt(0);
        };
        FastMath.initRand = function (seed1, seed2) {
            FastMath.randIndex = Math.abs(seed1 * 23981 + seed2 * 10289) % FastMath.lookupRand256Length_$LI$();
        };
        FastMath.rand256 = function () {
            FastMath.randIndex = (FastMath.randIndex + 1) % FastMath.lookupRand256Length_$LI$();
            return (FastMath.lookupRand256.charAt(FastMath.randIndex)).charCodeAt(0);
        };
        return FastMath;
    }());
    FastMath.lookupFloorSqrt = "\u0000\u0001\u0001\u0001\u0002\u0002\u0002\u0002\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f                                                                 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"#######################################################################$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))*************************************************************************************+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,-------------------------------------------------------------------------------------------.............................................................................................///////////////////////////////////////////////////////////////////////////////////////////////0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555556666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<===========================================================================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^_______________________________________________________________________________________________________________________________________________________________________________________________`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkklllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooopppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssstttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2";
    FastMath.lookupRoundSqrt = "\u0000\u0001\u0001\u0002\u0002\u0002\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0005\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\u000b\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000e\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u000f\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0010\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0011\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0012\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0013\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0014\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0015\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0016\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0017\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0018\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u0019\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001a\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001b\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001c\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001d\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001e\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f\u001f                                                                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"######################################################################$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))************************************************************************************++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,------------------------------------------------------------------------------------------............................................................................................//////////////////////////////////////////////////////////////////////////////////////////////000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<==========================================================================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^______________________________________________________________________________________________________________________________________________________________________________________________````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0081\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0082\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0083\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0084\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0085\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0086\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0087\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0088\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u0089\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008a\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008b\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008c\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008d\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008e\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u008f\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0090\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0091\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0092\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0093\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0094\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0095\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0096\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0097\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0098\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u0099\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009a\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009b\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009c\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009d\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009e\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u009f\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a1\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a2\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a3\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a4\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a5\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a6\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a7\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a8\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00a9\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00aa\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ab\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ac\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ad\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00ae\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00af\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b0\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b1\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b2\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3\u00b3";
    FastMath.lookupRand256 = "7\u009d\u00a2\u0095\u00c6/+&&\u0086\u00a4=&d\u0081VQ\u0000\u00e6\u00e0D\u0093i\u00d9\u00d5$\u00c0\u009e^\u00de\u0090j\u00fe\u00fe\u00c0\r\u00b5\u00cd\u0013\u001an\u00b6\u001b\u0084\u0000\u00c2\u007f\u00da\u009eT\u00cfod\u0083z9w%gW\u00d63$\u0004\u00b2KD\u00dc\u00ee\u0089\u0083f\u0087\u00eaX\u0007\u00bd\u00b6$\u00fa\u0084\u00d1\nc\u00d3\u00fb0\u00a1\u0093\u008e\u00b5\nS\u0091\u00e8b\u00c2G\u0001o\u00fa=h\u008c\u00f0\u00e3\u00a8\u00fd\u00f5\u008b\u00e4>X\u0086\u0001\u00ca\u00b4p\u0095+\u00d4\u0090\u00b7~;\u00d4u\u00b5\u00dd\u00f8\u00acF\tI\u00d9\u00dbm\u00f8\u00fa\u001aT\u0012\u00b2Uo\u00d3C\u00f2He\u00e9\u0006\u00e9\u0099rc\u00e0\u00d3\u00eat\u00c7\u00ba\u0001*-|\u00e4`\u00fe^\u009b\u008c:\u00e9\u00b3\u0088\u00e9o\u00be\u00ea\u0013\u0013\u00a9\u00b6\u00c6\u0099\u0092#Ln\u00b8\u00ba\u00b9O\u00c0\u001d\u0000\u0094y\u0094\f\u008cs\u00c0Us\u00b9\fJ\u00b3\u001c\u00f7\u0096\u00e1\u00feTS\u00b7\u00c9\u00c6L\u0097g\u00b7\u00ce\u0087\u00fen\u001a\u00d6\u00f6P9\\*\u0084\u00b9\u000f\u0002\u00beZ\u00a9\u00aet-?\u0013S\u0003\u00ebce5\u00d2\u00f1\u00c6\u00fe\u00e0K\u0087\u00edE\u00e5\u007feC\u00ca\u00ec\u00f1\u0001\u00ba\u00b5\u00d9qk\u00a9\u0085S\u00ccA\u00e3\u00ff\u0095\u00ad\u00e6\u00ae\f\u00a7(\u00be1\u00ea{\u00ecR\u0011[;V\u0091\u0096\u009d\u00c2<~_\u0087\u000b1\u0002c\f\u008a\u007f\u00f6\u00f8\u0088\u00b7\u0010T\u00a1\u00a4\u0080\u00e0k\u00c0L\u00b1\u00ad\u00d2\u00ce\u00a2\u00d8#D\u00ab\u00bds\u001ez\u00db\u00d2lF~\u000b\u00b8l\u008dd\u00cf\u00ff\u00db\u00f6\u00f7R\u00f4\u00a4\u000b\u00b9>\u00e95=\u008d\u00d7|\u00a1\u00e5\u0089w\u00df\u0092$\u00bd\u00ef\u0082\u0098\u000f\u00bbgy\u0000\u00a7\u0091\u00ca\u00be`0\u00fa<\u00eb\u00f6\u0092\u0000\u00a49\u00d4X\u001c\u0001\u00e0T\u00cc\u00baF\u00b96R\u0017Q\u00e4\u0080i\u00a3\u00da\u000194\u001eAU\u00edf\'\u009f\u007f\u00bc\u0090\u0014Q\u00fb\u000eb\u00e1\u007f\u000e\u00e1\u0084\u00c5O\u0005H\u0093\u00f1&\u00f5\n\u00b8\u00c0\u0095\u0001\u00de\u00c4\u00a2a\u001bT\u00be\\\u00fe6\tU\u00f48\u00ae\u00e1M>\u0098\r\u0091e<\u0086m\u00f5a\u0011f\'\u00f2\u008c\u00b21\u0010#P\u00c9V\u00f6\u00a2w89\u00d7%I\u00ec\u00f5\u00e6A\t\u00ee\u00a3-\u0089\u00f4\u00b9\u00fcJAt\u0005\u009a\u001e\\\u00f9\u00bf\u00e5n\u00b3\u0004KiTO0+\u00e2\r\u00a9\u0016\u007f\u000fi\u00dc\u00c9\u0085\u00b9,\u00fe\u00d7qbK\u00e7\u00db\u00f2\u00b0\u0010\u00af;S\u00d2\u00f4\u00e1\u0080\u00d50\u00fe\u008b\u00ec\u00aa\u0090\u00ca\u001b\u008e\u0018\u0093\u001c\u00d1\u00a5\u00cbz\u0013\u00e5\u0005F\u00ef6\u00c4r{\fz\u00117\u009dF\u0082\u00f5\u00b3\u008d,\u00f3I=\u001a?\u00e5\u00bcV\u0012\u00c1\u00f5\u009a=5\u0083\u0004\u008c\u00c9H\u00c5\u0001\u009f\u00d3\u00c0E&\u008e\u00c6\tHM\u009ald\u00a8\u00bch\u00db9\u00e3\u00b5\u0097\u00ce\u00e9\u0098\u00e4F\u0005?\bI)\u0001\u00c2\u0091\u00e0\u00d0g\\\u00ef\u00b2jKO\u00c4\u0013\u0000=\'\u008f\u0085i9\u00da\u00f7!\u0000|v\u0006\u0007\u0085\u00e4\u00fd\u0011&~\u0081~\u0082\u00d9\u00ac\u0087\u0005\u00b3<Z\u00cc\u00c0\u00be\u00d9l\u009ef\u00fbxyl\u00b9#4\u009e\u00bf\u0018\u0082\u00a1\u008d[\u0081\u009bQV\u001aq\u00dc$\u0004\u00b2\u00d1O\u009e\u008e\u009d\u00f0\u00b9\"\u00126\u00de\u00e8\u00a9\u00cd4aq\u0006\u00bbxEx\u00187\u008fJ/@r\u0091PP\u00b8\u00169\u0000\u00bc\u00db!3\u00e2\u00b7\u00d5\u00cf$v:\u00c1\u00f9\u00c7Y\u00a9G\u00e8Ij\u00a5\u00c4\u00f5J\u00fc\u00c7\u0085\u00ed\u00d0\u008d\u0019>\u0081\u00c1\u00d6\u0013\u00f0\u0091\u00d6\u00bf\u00c4\u00e1\u00e3\u001a\u008d\u00e1\u0007$d\u00e4\u0086\u00a7\u008a\u00e41\u00ff\u00e9\u00a3\\\u00e5t\u00af\u00a4\u009f\u0000\u0084X@s\u00c6P\u009e\u00cabGl\u00a3]\u001ef\u00d7\u0013\t\u00d6 \u00efj\u00f0\u0002eNg\u009atk\u00f6J@3x!G\u00d4\u00aa\u00978\u00ebN\u00adU\u001b\u0080\u00a1\u00d3\u001f\u00ca\u0007\u00fa\u0010\u001dQz\'&\u00ed\u009edp\u0087\u0012\u00ae}\u00b6\u00e3\u00ce\u001e\u00a1\u00e1\u0090\u008a9\u0018;\u00dd\f\u00ad\u00efz\u0080J`\u001e\u00d5\u008e\u00a9\u0006\u0091Z\u0088f\u0086TC\u00f0\u00be:>\u0000\u0088\u0007O\u00ef\u00e9p\u00baH\u00e2r1\u0095\u00b9\u00ee\u0092\u00af\u0087a\u00ca1\u00f5@S\u00b68\u00bc<\u00b6\u0017\u001d\u00f6\u008c\u00a6k\u0092\u00d3\u00cct3\u00b7\u00c7~`\u00e7\'\u0013\u00ca\u001f&\u00f0\u00fd$K#\u00ab\u001e\u0092\u00e6\u000fx\u00b5\u00f3\u00de\u00c3\u00bc]X\u00c8\u0093\u0080\u00aeTL\u00a9\u00d4\u0004P\u008eN\u001cT^\u001d(\u001bF\u00ab\u0014a\u00c8\u00e8\u00a9\u001b\u0092\u00c0\u009a\u001e@W\u00f8\u001e\u00bb\u00cfH$Ze\u00d3\u009b%\u0081a\u0080+_\u00c0p^\u00d6\u00a5\u008d\u008a\u00ee\u00a5\u001b\f\u0012G\u00f8\u008dr\u00c1\u00ef\u00bd\u00a3\u00c5\fI\u00ee`\u0096\b(\u00c9\u00190\u00e7\u0084)\u00f3,\u00cbFM\u00bb_H\u00fdI2\u0017\u00ed\u00fb\u00f8\u00f1\u00cd\u009e\u00d5\u00e0hU\u0082A\u000eh>\u0097\u00eag\u00f1\u00e1\u009d\u00a3\u00d0\u009bW\u0085\u001e\u00b2\u00ce6\b\u00c3\u00d2U_$57f]x\u0082\u00d1\u00cb\u001f\u0017\n\u00c5\u0085V\u00a6\u00f3\u0093\u0086(\u0004,\u0081\u00cbSq\u00den)\u0019h\u00ce\u009f2\u00a8\u001a\n\u00bd\u00c4o[d\u00c8\r\u00df:C\u0096!\u0016?SV\u000b\u00fdV\u00be\u0018\\\u00d0\u00c7=e\u0089v\u00faXV\u00d6i:!D\u00a1 N\u0001q\u00ae\u00a8S:\u00fc?\u00a4Y\u00a3\u00a0\u008fbL\u00dbw\u0089dL\u00f2ae\u0011\u00e1$\u00a67FW\u00f0qX&\tJ\u00f6|\u00be\u00a1\u008cn\u0082\u0086\r\u00843\u000fr\u00daV\u0086\u00b7\u008d\u00d8\u00ea\u00efE6\u00caC\u0016\u0095\u008d\u00a8(<st\u00c1O\u00e0vU?m\u0099\u00e9r\u00f6\u00f2h\u00cb@4O\u00f8\u00f7\t1\u00c4\u00c4\u00f6\u0088\u0018\u00e3\u00a1\u008bM\u0098P\u001e\u0099\u00f67\u00ec\u00ff\u00eaG\u00cc:{\u00d7\u0018\u000eB\u00ff\u008bF\u00da\u00cea\u000f?\u001f\u00ba\u0097\u00f8t\u00f8\u008e\u0010U\u0003\u00e3\u00d0\u00ac\u00f1\u0089\u00f7GH\u000b\u00e7\u00da\u00d5\u0016\u00d6\u0087<\u00a0\u0094\u00ec\u0094a\u00b5\u00b5\u0019x\u0088I3\u00f1jn?x\u00b8\u00b5z\u00168zi0\u00f2\u00d0u\u00ca\u00d1\u00a1\u0097\u0003\u009fL\u00aa,y\u0094\u00ad\u00d3\u00e7\u00ef|\u00e26\u008fV(9.O_\u00d3\u00d2\u00ac\u00c5\u0085{\u00a4\u001f:z\u00bcv\u00c0e\u00a5%\f\u001f\u0006\u00b17c+<\u00bbD\u00b8;\u0007C\u00b5[Z\u00e5~\u00c1\u0091__\u00820^\u008b\u009a!BWE\u00bcjk\u0081\u0006\u00a5\u001b\u00d8#YJ>g\u00bc\u001e-AE4\u0087\u008f3k\"z\u00e0\u0006_)\u00ad5L\u0015]\u00b8c\u00cbS^(\u008f\u001f\u00ce?\u0096\u00b5B\u00d4k\f\u00f8w\u001bPc\u0088G\u00de\u00ddZ\u0097\u0011\u00d93\u00a5P}\u00a6\u00c4\u0097\u00b9l\u00a9\u00d0\u00a3\u00e2\u00b8?!\u0001E-5\b0\u00b5\u00c7\u0004\u00a7\u00e2\u007fG[\u007f\u00a3\u0011\u0091\u00a9\u00d5\u0016\u00b3\u00e1k\u00fc\u001d\u008bU\u00e7\u00c0po\u00af\u00f1\u00ff\u00f5\u00e8\u008e\u0018\u0094q,aT)\u00b2j\r\u00fcu\u00f6o\u008f\u0002\u00ea\u00b7#\u0084x\u0098\u008e\u00dae\u00e8\u00e8\u0004\u0081\u00bd\u009a\u00b5\u0082\u00e9\u00d1=V\u0087\u0094\u0003\u0086$U \u0003ZO\u00be\u008b\u00be\u0017Gy\u0007b\u00dd\u00a4\u0010AT\u00e7d%\t\u00f804\u00a4\u00b8\u00ed\u009d\u00ffZ\u00a9\u0018\u0098n\u0003\u0093\u00ff\u00d9\"~\u00e9\u0006M\u00e88{\u00d6\u008dY\u00d3Y;\u0093\u00b2X\u0082\u00bdS\u0084\u00e4z\u0001[\u008e\u00ef4\u00ee\u00f7\'\u0015\u00ea\fK\u00a0 \u00b3\u00de\u00c2\u00a5@\u009b\u00d9\u00eem\u00e6_\u008c\u008e\u00e7w\u000bT\u0091\u0090\u00ee\u0005p\u00c6\u00a8\u0015\u0088\u00e56\u00b3Za\u0091a\u00b9\u0089^\u000e\u00b5\u00bb\u0016\u00e2\u00a2\u00f3\u00fe\u0004\u0095\n0\u00fb\u0087\u00b2%\u00f1\u009a\ns\u00f6\u00e9[<\u00ef\u00b5*?\u00f7\u001a:\u00b6;f\u00df\u0018\u0015\u001a\u00898\u00a8\u00a1o\u00e1\u008c\u00e6\u00e9\u0099\u000bd\u00e9)\u00bciJ\f\u009b\u00b9\u00eb\u00d9$\u00ae\u00a3\u0084\u001e6\u0087\u00c8\u0012\u009b\u00c8prA\u00d5&\u0004f\u0003\u00aa\u00de`\u00d3\u00dd\u0016Id\u009b\u00eb\u008f\u0091\u007f\u00ednps\\(D\u00a8\u00c0\u00d3an\u00f66[\"\u00f7\u000b7\u0012K#\u00bb\u00a9\u00f9\u0013\u00ab\u009a\u00e7\u0098\u0004|8\u0012\u008c\u009eZ\u0002%\u008f\u00a7\u00d8\u000et\u00a3\u00ab\u0093\u00a8\u0001\u0010r\u00ad\u0088\u0086\u001cE\u001e\u00a4\u00ae\u0098\u0013\u00d8\u00cc\u00d3\u00bf\u008a\u00f8\u0097]\u00a1%F\u00c6S\u00a6\u00b2]@\u00e0\u00e8\u00d6\u0006M\u00dc\n2r\u00ce\u00c3\u0093\n\u00e7\u0094\u00cc\u00ce/\u00ea\u00f5\u0087T\u00e8\u00e1S\u0099\u00e3N\u00ba\u00c8\u00e4\u00d08\u00b5\u0084\u00c17\u001e\u00e8\u0004\u00b0A3\u0080\u00c5\u00cez2\u00ac\u00a3\u0007\u0091\u000e\u0087\u00c7\u0098;g\u00e9\u0016D\u00c2\u0096X\u00b9\u00e6LzDH9\u00b8:=\u0096\u00bc\u00f0\u0085\u009bB7\u00c5r;x\u00dfS\u0019\n\'\u00c4\u00d1\u00dc/\u0002\u00a2\u00a4M\u00aa\u00bd0\u00ea\u00dep\u00d2rz\u00d9\u0012u\u0080\u00d7\u0089\u00a8\u0016\u00e5P\u00b1k\u00d5\u00edjC\'\u00fe\u00b7\u00d1\u00111\u00ce\u00fb\u008d\t_E\u0084\u000eL\u00b3\u0096\u00e7G\u00ea\f8&\u00dd\u00904\u008b\u00a2\u0084/\u00d1\u008a\u008f\u00df\u00b7\u0088)\u00bb\u0002MU\u000b\u0006\u00a4\'\u00bc[\u00f1\u00af\u00ea:j\u00c9#\t}G\u00b5.\u001f_\u0096\u0000t\u00c4Js\u0098?\u00d7\u0002\u00d5\u000f$\u001c!Z\u00d5\u00f2\u00a1\f(=\u0091\u00ba`\u008d1\u009c$v\u00b7\u00efz\n\u008e\u00cf\r@G\u00e5\u00b6\u00c0\u007f3\u00ab\u00c9w\u00b6\\y\u0095\u00d3\u00e4\\2E\u00c6\u00b7\u00d2%\u00cb\u00a2\u00b8\u00ee\u0018\u00d2\u000f<sG\u00f1ys\u007f7\u00e2\u00c0\u00d2\u008d~\u00c4\u0002\u00ea\u00d9\u0089\u00ea;\u00e4\u0094\u0007\u00d8z\u0017\u0090\u00ea\u00b2\u00a8\u00e8O\u00eeLF\u0017r\u00b9\u00e0?\u00d8\u00d7r\u0081\u0089Q\u0091\u00bd\u00f7f\u0000\u009fv\u00b4\u0007\u00bc6*[F\u00b0\u00a8`P\f\u00fd\u00dc\u00c6\u00d7>\n@\u009b\u00f7\u00e2\u00a7|\u00f5\u009b\u001b\u00bb\u00b5\u00bb\u00dc\u0003\u001b,Dr_\u00df\u00e1\u008b\u00ea!\u00c0\u009e#\u00e6\u00d7i\u00aamqj\u001e\u0001\u0004\u00d0(H\u00bb\u00few\u00ca\u0091i\u00c7\u00932L3\u00b2\u008e9\u00da*\u0006<BY\u0080\u00fcQ\u0099ioY\u00ac\u00b42F\u00de\u0001\u00dc\u0096\u00c1\u00a8\u0083\u00db\u001b\u00d8\u00e8(\u00f9\u00b1\u00b5\u008aV\u00d6g\u00fa-\u00b8\u0083H\u00b4\u0016\u00b4\u0003@\u00ca\u00ab\u00db\u00f6\u00bb\u0086\u00d5\u00b6\u009b;UR\fp\u0006\u00ac\u00c9\u00c4\u00ef\u0013\u00c3\u00ffV\u00ce\u00f4O`\u0002XT\u00b5\u00bc(\u001d{\u00e0-\u0080\r\u00aaE\u000f\u00e5\u00bb\u000e\u009a\u0015\u00c73I\u00e3\u0094\\_\u009b\u0098\u00b9\u00faz\u0010\u00c1re\u0019\u00c8\u0095\u008c\u00bd\u00e0\u00b8=2\u00d3\u008cZ\u00f5\u00c30\u00bc\u00da\u0099\u00abc\u0002L\u0092*\u00da\u007f\u0086\u00b0\u00e9\u00fbk\'<\u00f9\u00e2\u0094\u00e0\u00b0\u00fb\u00de\u00f7>+60\u00e0\u0012\u0014\u008a\u00a2\u00d1\u0086\u0019\u00fd0\u00f1\u00e2m,\u00ea\u00f6R\u00d1+!\u0012\u000e\u0082\u00d8\u00a8W\u0007r\u00e55\u00d7\u0085y>\u00e0xJ\"\u00b7\u00cbGY\u00e6\u0095j`D\u00e7\u00e2\u00a1Z\u00a3!\u0016p\u00bc\u001a\u00d4\u00e3x\u00b5\u0001\u00c0\u009en[{\u0012y\'\u00a9W\u0099P\u000f\f\u0000~\u00d8A\u00eb;)o\u0000\u0085j2\u0086\u000f\u00ed\u000bh7~>F?)\u00ceJ/\u0085S/;\u0095\u00ba\u0093\u00b0]\u00fc\u00cd\u009c\u0016\u00a7pM\u00a8\u00a5\u00bb=~\u00fdZu\u00ab\u001f\u00e6\u00fc_G\u0089\u008e\u00d9;\u00cd\u0081k\u00a0v~/\u00bf$YN\u00a5\u009c\u0082\u00d0>\u00c6\u0002$\u00ccp\u00ef\u0091\u00ab\u00b8\u00e7r\u00d0\u00e6\u00e8\u00c5\u00ee{F\u00fc\bI\u0096(5\u008d\u00dc\bl\u0096^\u00ab\u0011!\u00baKW\u009bx\u00df\u0007\u00a9)1\u00e3Y\f\u00e1\u00ae\u00c8\u0091dA4B\u00dd\u00fa\u008b^\bDL\u0012\u00de\u0004\u00a9\u0094\u00ab\u00d3c\u0085\u000b\u0004\u009dK\u00f4\u0000C\u00e8a\f\u0014\u0088\u00c1\u00f2s\n\u00b5\u00a0\u0016&\u00cc\u00f6l\u00f3\u001c\u00f1\u00d7\u0015\u000e\u008b\u0017\u0099\u00c4Y\u00b7?\u0092u\u00bc\u0003\u00f9\\YW\u0001l\u00bc\u0010bKP\u0087\u00f1<\u00bfnY{\u00c4~\u00d8\u00e9\u0007\u00a4\u0006\u00c6\u000fx\u00c2\u008c\u009c\u000f\u00fc\u0016\u0002/\u00cc\u0086\u00f3\u0097.p\u00d8#5\u00d5\u007fRs%g\u0089\u00e7JU\u00d7L\u0085Osp\u00a3\u00b3\r7\u00b6=\u00f0\u00f2\u0086\u00b8<\u00ad\u001fG\u00e6\u00b8\u00be\u0016\u00e8\u00e0\u001a\u00a3\u00182\u0018\u00dde\\\u0097\u00b1L{\u00af\u00bcy\b\u0096\\\u00e9\u00e7\u0090IbIqTN\u00d7\u001c\u00dfb\u00d31\u00941\u00c3\u00ae\u00b2\u00b55i\u00df\u00cf_\u00a6\u0082\u00167:\u00b0A\u00d1\u001f8M+\u0088\u0017gHHR\u0014e\u00ad\u00a3\u00ebx\u0084\u00ae\u0088\u0091X@\u008aLR\u00b9\u00ba\t\u009dt\u007f\u009d\bvk\u0001\u00ad\u00f7\u0016\u00d0\u0089)\u00ff/0\u00de\u00b5\r+\u0099\u008b\u008f\u0086$d/\r\u000f\u00b7\f\u00f18\u00b0\u00a5\u00815Z!\u0006\u00b7\u00164\u00f7\u00fc2\u00f0l\u0016}\u00fb\u0083c\u00e2\u00f3\u008bU0\"\u00ea\u00efS)`L\u00b5a\u00b8\u001f\u000f\u0089_.E\u00d1\u00fe\u00cey\u00a2\tA;\u009d\u00cd\u00f3\u0019\u0084\u0082\u0094\u00c3\u00ca\u00bd{\u00cek9\u00bb\'\u00a4pZ\u00b6<\u0096!\u00a4`\u001a\u0013\u00da\u0097J\u00a0])\u00f5\u0012\u0011\u0007\u00e9o\r(\u009b<v\u0005%Ai\u00ea$\u00f0\u00c7\u0080\u0019\u00bf\u00a6i*\u00a4i\f\u00e30\u0092\u00ee\u00b0\u00ddWY\u00e1\b\u00b1K2\u0001Y\u0019\u00c7\u00caO08\u00ff\u00c6m\u00feK1\u00e5\u00fe5\u00e5\u00bd\u008f\u00d6xd\u00ddYn%@8\u009b}\u0098{\u00f7\u00b7b\u00f9\u00f0\u00d7\u00b2C2j5`\u00ed\u008a~\u00ae\u00b2\u00f4\u00da\u00d9\u00a5\u008a\u00b4\u0096\u008b\u00b5\u0002\u009d\u001fT\u00fc\u000b\u0092\u009a\u00eb.\u0010\u001b\u00f6t-\u00f7VaMC\u0003\f\u0096\u0092\u00a7\u001d\u009f\u000e8\u00ea?d\u0090\u000b\u00101\u00c0@\u008a%!\u0097\u00b4\u008e\u0015\u00fcPb\u0080\u008d\u00dbXY(\u00d2\u00a0\u00f0\u00a3#\u00c0y\u00bb\u0097(^\u00e1_\u00ae\u0082\u0093H\u001a\u0014\u00bfO)\u001b},\u00cb\u00da6D\u00c3\u00e6\u00fa\u0007\u00cd;\u00cc\\\u00dc\u0017d)\u00bdg\u00c2\u00b7z\u0083\u00d1?\u008f\u00a9(\u0014a\u00f0\u00b2\u0006\u0011%\u00a0\u00a5/|\u00d2jvH\u00eaq\u0091\u0096\u00b1\u0091\u00ed\u00ff7\u009b\u001e\u0004\u00bcx\u00a0\u0096j\u00eb\u00d18\u001e?\u0016\u00ef\u0001\u009e%W\u0002\u00d0\u00a8\u007f\u0088\u00fdh\u00f6d\u00e3q|\u00b5\u00861\u00ffc8\\[Q\u0081\u00eb\u00c4\u0013\u00e5\u00e2\u00d8*\u009b\u00ea\u00bb}\u0005\u0098\u0091\u0003\u00da\u00e5\u0013^\u008d\u00f3?\u0081\u008a}\u00d5\u00ad*t\u00ac\u0087\u00ff;\u0007\u0094\u0006\u001evR\u00eb\u0085\u00c7\u00f2\u00f6\"\u00d0\u00e3\u00e2\u0003T\u00d5\'\u00ac\u008d\u0005\u00f3\u0088_\u0097\u00a8$\u00dd?\u00dc\u00b4\u0015\u0081%xI\u0088\rs\u00e7\u00d3)\u00bf\u00c4x\u00f9\u00f8\u001d\u001c\u00b8\u001e\u00c7\u0002i\u0014\u00e4\u00ad\u0089\u00d4\u00bffY\u0087\u00af\u00a1eSTI\u00c6\u0088w\u00d4\u000fy|@\r\u00c4\u008d\u0089\u00e7l{&\u000f\u0005\u00811\t\u0002{\u00d8\u0014\u0011\u00d2\u00fc\u00ebd\u00c6\u00bas\u0083\u0006d\u009b]\u0010\u008bi\u0011\u0004\u00e9\u00a4\u00d0\u00c7\u008c-5s}=\u00dd\u00e6\u001dAIQ\u000b\u00e5\u00a2A\f\u001d\u00c4\u00cb\u0093\u00b3\u00e8\u00e2\u00ec\u00ef\u00db\u00f0\n\u00bb\u00a8\u00a3\u00a0\u00d4\u00bb\u00d0\u0016\u009a!\u00cb\'\u0006G\u00feA\u00cc\u00182}\u00d1\u00b6\u00bd\u00f3\u00ec\u00f5\u0015\u00ee\u00b4ml\u00dd\u00de\u00abt\u00e4\u00ff\u0015\u001f\u00f5\t\u00b7\u00af\u0099rM\u00cf`U\u0010\u00d0\u0084\u00b5g\u00d7\u00eb\u001f\u00a4\u00be\u0083w!\u0019\u00ab\u0098\u00b1\u0081\u001c\u00c3\u00c5g\u0086\u0015\u0084\u0092\u000e\u009a\u00e8\u009a.\u008e\u001f(\u009f_\u00c9\u0004\u00feC\u00bdQ\u00ca\u0081v\u00ce\u00dd\u00bd\u009b\u00c2f\u00ed\u00e0\u001b\u00dd\u009f\u0005!\u00ecV\u0096\u00d1\u00f8\u00b2\u008b\u00c3K\u00f1#4\u008f&\u0018\u00c1\u008a_\u00eb\u0088\u00dd\u00bd\u00db\u0084\u00a9\u00b5\u00fcs\u009a\u00ad\u0019\u00e95 {\u00cah*\u0090m\u0098o-\u0017\u008dhx\u00dd\u00fb\u0001/(\u008cv\u0015f\u00f4\u00e2\u001a\u00b2\f\u00c1\u0093\u00ff\u00e0\u008d\u00a4\u0012:B\u0000\u008d\u00ec\u00dbY\n\u009cWgeR\u00bb\u0018y\u00c5\u00eb`2@\u00f6\u00f1\u00cf\u00fcH\u0003\u00a18\u00f2WA;\u000e\u00c4\u009ab\u0091\u00cb\u00a17\r\u0094X\u008f\u00a1\u00e9\u00fc\u0081r\u00a1\r\u0015\u00dd2\n\u00be\u0096?P\u00bf\u00a1\u00f0\u00e4!\u00fe\u00b3\'Uf|e;i#\u00fe\u0015\u00c9g\u0000\t\u00d2\u0086\u007f\u0092\u0097)\u00e8\u00e4\u00f5(\u00e4\u0015N\u00c7\u00e4\u00bd\u00a2L\n\u008d\u00ff\r2tX\u0087$\u0085\u00f14\u0083\u00ba\u00d6\u009d\u00d8bg^\u001e4F+\u001dh\f\u00ae\u00fb\u00fa*\u00cf\u0018\u0090\u00f7\u00c0\u00c4\u0095\u00e6N\u0015X\u00fc\u0003[\u00e8\u00c7\u0005k\u000b\u0004\u0093\u00dbQ\u00ad\u00ff \u00e1wk\u00b75\u0006&\u0002\u009b;*\u00ec\'\u00aeo\u00d2\u00cd\u00d9\r(MbD\u001e+H\u00b6\u0005\u008e\u00d7&}\u009er\u00d2wlD@\u00c2\u00bb,\u0002\u00e9\u00f6\u0010\u0096\u00f5\u0088KY\u008f\u008f\u00b5\u00ad\u00dd\u0017\u00e0B\u00d7\u0087G\u009e#\u00af\u0012\u00da\u0004\u00bb\u00181%\u0093\u00fe\u00adte\u00be\u00eb\u00dd\u0088\u0007R@^x\u00f1`^\u0080\u0089o\u00e3A^\u00d3\u0094 N%\u00b9\u001b\u00c6\u00ef=\u00de\u00ed\u00e9@\u0015\u00d5\u0084\u00d7\u00c3&?\u00a5NF\u00c4\u00b0\u0014i\u00bc\u00cb\u00b6\u0004\u0086\u00c6\u00c5\u0081\u00c3\u001c\u00b3\u00e3\u0017\u00daU@#\u0083\u00cb;\u009b\u0085\u0098t\u0001Ow\u00a7\u008c\u00afy\u00f8c\u00a0\u00d0HU\u00bf\u00cd\u0095\u0010A6K\u009c?lj{\u0091n\u00c8UcP\u00ca\u00c4$~\u00bcl +\u0090\u00fbZ\u0082\u00a8O\u000e\u0014\u00c8A\u00fc4?pL\u0011\u00b3ud3\u009eq\u0004\u000bg\u00bd8H\u00d3w\u0000\u0082\u00d1D$\u00b7\u00d1\u00d2\u00e6\u0092XDGyy\u0005d?F\u008e1\u0094\u0014\u00fc\u008b\u00ce\u00d8\u0085m \u0080 \b\u00e5\u000f\u00b7\u00a8\u0082H\u00d4\u00bd\u0082m\n><\n\u00e6\u008ffI\u00bb\u00ff@\u00eaJ\u00b0l\u00d2W\u00941T\u0098\u0006\u0083\u00a8\u000e\u0096\u00ef\u00cc\u00b0l1\u008f\u00d5\u00f4\u0001\u008c\u00f4\u00bc\u0090\u0019\u0010\u00b9\u00e1|\u00a6\u0097W\u00e8\u008f\u0097\u00ec0\u0003\u00aa\r\u00ca\'\u00da\u00d8\u00f5\u00e0L\u00ec-\u0010\u00a0\u00ae>\u00b8\u00ae\u00d3;\t.*qF\u00e3\u00c8\u0082\u00fc<\u00e8\u00be\u00061\u00f1+\u00d8\u0007Q\u00998\u00e6\u008c\u00b2/\u0098LlK\u0003ps\u0006\u0086\u00c0e\u00e8\u0093\u00d2\u00a9p\u0003\u00aaz/r\u0092%0\u0080\'^\u0018\u009e(\u00a0\u0016\u00a5\u00fa\u00c4]\u00efJ\u008ah\u00b7h\u0018\u00b5\"\u00d2\u001b\u001f\u0092\u00e6\u00e3\u00b4\u00d6\b\u00c5\u0094\u00c7\u00eb\u001a\u0015\u00e7e@\u0094/\u0097\u00fd\u00cf\u0010\u000bC\u00da]\u0015\u008e\u00d6n\u00be0J4\u00a9B\u000e\u00b5\u00daBO\u0092\u0012a\u009ex\u00e6[T\u00b5\u0095dm\u00eb\u0096\u00feE\u00998\u00b8E\u00df\u00da\t\u00ab\u00f9\u00f9\u0093\u00eb\u0092@l\u000b\u0005\u00a3\u00dc\u001a\r_\u007f\u00eb$\u0083\u00ba8\u00903\u0082\u00eaX\u00e9\u000fW[E\u008c0\u00ddj\u0007\u00f8\u00c1]w\u00af\u00ac\u00f6\u00d6\u00f8(\u00c9Ta~\u00c3\u00fe\u00d2\u00e1\u00ffz#\u0097f\u00b8{v\u00f6\u00b0\u007f\u008a\u0015\u00a5\t\u00f4\u0003\u00c4&\u00a7\t\u0086FU8{\u00c8U\u00f5\u0085{\u00ff \u001bX\u0015S\u0097\u00bap\u0087\u0094\u00bd4\u0097\u0088\u0012\"s\n\u0091\u0087\u00df\u009b1{\u00cd\u007f]\u009e\u0094\u00fd.V2{\u008a\u0002\\\u00edent\u00e1\'\u0002g;\u007fc\u00a1sehv\u0083\t\u00a8MJ\u00b1U=\u00bfS\u00db~\u0012\u001c\u001c\u00a0\u00e8\u0088\u0083)\u00fc\u00eb\u008c4\u00add%u&\u00e9\u00b5\u00c9\u00e7<\u00ea\u00db\u00b2X~-\r\u008c\u00e3h\u00e95\u00c6i\u00b8\u008d\u00f6\u0083\u0087\u00d2\u00f8\u00a6H\u0006H\u008d\u00bb\u00a70g\u00f3\u00c7\u00a9Q\u008a\u00a8\u00f0p\u009e\u0015!\u00ab\u00f4T\u008e\u00c2\u0097\u009cM#\u00a4, \u0013\u00a5:\u00a4\t\u001b>\u009d\u0016\u00cf\u009f\b\u00b3\u00c6\u00f9~@\u0012JP\u00c9\u001c\u0089\u00b3L^1\u00a6(\u0099\u008bS\u00a9U\"o\u00caS$\u00b3\u0011\u00d8\u009d\u00c6Q\'\u00f5\u00ee\u0012\u00c0\u00b7\u00fdDx\u00d5\u000f\u00f6\u0004r\u00c7\u00cf)\u00c3*\u0083R\u00bf\u000b\u00bf\u00cf\u00cb\u00b5I\u0019Q0\u00fe\u00f8iN\u00d9[H\u00ef\u0016(<\t\u00fb\u00ab\u00b3\u007fgO\u00b3\u00f65\u0084\u00dd\u00b7\u00a9\u0083\u00b1IC\u0080d\u0086\u00efX)\u0015\u00f6\u0000\u001a\u00c6\u00e9n\u00f6\u00ef\u00b3\u009d\u00bf\u00c76\u00b7[8C\u00ea\u00d9\u00a2\u00e6\u007f\u00de\u00fe\u0000J\u00e0y\u00b7\u008bv\u009cZ\u0016Q-\u008edNG\u00b5\u00ceQ(\u00b1\u008e\u00b5\u00bc\u0011\u00d9\u00c1\u00f0\u00bax@\f{5\u00fa\u001a\u00e4\u00e1no\\\u008f\u009d8?\u00e8\u00a9\u009a\u00cdXG\u00e5\u00a0\u001a\u00df\u00bc\u00b8\u00dfG\u0010\u009f\u00b4|\u00c11\u00ed\u00d5\u00e1\u00c3\u00a6\u0004\u00ef\u00bd\t\u00c7k\u0013350Bt\u0016n\u0098\u009e\u0003\u00a4X\u00bd\u0016\t\b\u00e5\u009e0B,\u00bd*\u00ba\u0098\u0007\u00cc[F\u00e3\u00e2?\u009e\u00c3@\u00e8p\u00eb\u0095b\u0010\u0095\u00e1X\u0003\u00f9$7z<\u0086\u00a0\'Z\u00c0\u00d0z\u00ac\u00cf\u001a\u0086\u0093\u0019\u0091\u0011K\u001a\u0088%\u0011\u0005\u00b7\u0018LI\u000e\u00c4]w\u0087\u00d3v\u00a1\u00c9\u00ab[\u00e7\u00cb! \u0083{;\u00e5\u00e6\u00b3\u009f\u0092\u00c1\u001bd\u0004\u0088\u00e9\u00dar\u009ce\u00ed\u00b0\u00de\u00bc\u00e2kS\u009d\u0080\u001drv\u009f\u00ab&f\u009dN\t\u00a6\u00d6\u0082zM\u00e5\u00c7\u0086\u00e3\u0016\u00f3\u0092\u00ec\u00b2\u000f\u00d5\u00d3\u00c1\u008e\u00df\u00bc\u0080\u00cbW\u0083\u00f1\u00d0z\u009f\u00978\u00ee\u00043\u00a9\u00d6\u00dd3\u00f1O\u000f\n\u00b8\u0004\u00d8\u009e\u00da\u00b5\u00d3\u00b0j\'\u00fb\u00f4sL\u0092\u00ba\u0005\u00e4v\u0096\u00af\b\u0084GV\u00abC\u000f\u00ea\u00ac\u009a\u00aa\u00cb\u00a8x\u00be\u0096\u00d7 \u00fcL\u0014e\u00a6\u0098\u00e7\u00d8\u0092dd!\u00af\u009e_:\t\u00f3\u00811\u00da\u00f11\u00a0\u009c\u00c7\u00e1\u0098g\u00ae\u001e\u00ce\\R\u00b1N;\u00bd\u00c6\u00e6Y\u00f3\u00e1E\u00a55\u00b5\u001c\u00d7\u00f7\u00feWqJ\u00d6\u00af\u008a\u000b\'V\u001c\u008aet5qw\u00fe8f9\u0010 \u00e8H7P\u00d1\u00d7G\u009f\u0005\u00b6\r\u00114U1=;\u0080\u00e9\u000f\u0085Q\u0002J\u00cfRa[\u0011\u00ef\u00f7\u0018\u0085\u0004m\u00db\u0015\u0097\u0082\u00b8\u00bd\u00036\u00ac\u000b\u00c8:\u0004\u0088\u0092\u00d7\u00c0/\u000b\u001a_\u001d\u00dfS\u009a\u00b02\u00b7\u000f\u00edD\u0098`\u008d\u00df\u008a\u00e9\u00a9C\u0007H/\u0019*\u00e6B\u00c8\u001f8{W`BDS\u00f4s\u0014\u001a,\u00ff\u0090\u00a0\u00f5biw\u0093\u001d\u00da\u0015\u0017\u00cf\u0019\u00a5\u00c5,/\t\u00d0a0\u009d[\u00c5\u000e\u00a5\u0096\u00e9\u00d2N\u00e4%\u0094\u008cV\u00a9\u00df\u00e4\u0097@\u00b0\u0002=\u00e42\u00b6\u0014\u00a74\u008b\u0093\u0000HJG\')b\u00b3\u00c9(\u00cb)\'\u00d2\u001fJ\u00ee\u0096\u00f5\u00dc\u00cbF#\u00c94\u00dd3\u00bcR\u00bb5\u00a9\u00c1\u009a\u001esd\u001f\u00bc}\u00a6M)\u00b3\u00c5\u00d3\u00b5\n\u00f3\u00b2o>\u0082\u0007<\u0082\u00be<\u001f(\u00bam\u001a\u00d2\u00ed`\u00de\u009d\u00f6\u00aeMt\u0017\u00cc\u00ear\u009a\\\u00df\u0086q\u00fc`\u00bf\u00da\u00f2\u00c0\u00fd\u00a10W\u001b\u00b0\u00ae\u0084\u00af2\u001b\u00e8\u00c9\u0084\f\r\u009a\u00a8FQ\u0005h\u0000/0\\\u0098\u009b\u00cf\u0087\u0001\\\u00c4\u00de\u000e\u001b\u001e\u00d4d\u001a\u000f\u000fJ.%\u00fb\u0098\u00fe\u00ad\u0017?3Fq;V\u00f0\u0015\u00e2\u00cf\u00db\u00c49h\u00cc\u009f\u0090\u00d6X\\\u0089\u0097\u00abZ}\u0014a\u0093m\u0011\u00f7BQX\u007fa\u0098\u0011\u00cb\u00e7\u00d8\u00ce\u009f\u00be\u00e9\u00d6\u00bcx~\u00ad;\u00b7\u0002\u0096\u00dad@\u00b9\u0014Ic\u00b71Ti\u00de\u00be;_y\u00bfn\u00a3r\u00b2\u00ae\u008d\u0011\u0085\u001f\u0093U\u0099wD\u00f6\u00ae9`\u001e\u0097<\u00f9\u00af\u00f0\u00b6p\u001f\u00c7\u00e1I\u0016HT\u00ba\u00ad\u00d6!\u00d6S\u00d1,\u0012\u00ab\u009c\u0005<P\n\u007f\t\u00b4\u00e9z\u00a4\u0089*3\u00f9\u0099,\u009a\u00c3[\u001e\u00ef\u00183\u008d\u00eei\u00f2\u00b7O\u009e\u0095\u001a\u00a5\u0007\u0003%o;\u00d1\u0012\u00c0\nUK\u00e1[f\u000136\u00e4\u009f7\u0013XjW\u00b6\u001dK\u0082\u00ca\u00a2\u00cbK\u00ebW\u00f9m\u0019\u0088\u0082\u00a0\u00a5\u0015TB\u00cf\u00ad\u00b7#\u00d6\u0014l\u00a1F\u0085\u00a5\u00d7\u0084\u0092y\u00bd\u00d7\u00f6\u00e3\u00b6\"0/\u00bf\u0093i\u00fc\u0093TT\u0096%\u0001\u009e\u0091B\u0083\u008b\u00b6L\u0015\u00dco \u00a1\u00c8\u00b4\u00a5=\u00f4\u0088[\u00e5\u00dc\u00ef\u00db\u00e8\u00a0s\u0083I\u0082t\u00c5\u009ct>\u0087$\u00e2\u00be\u0017K}\u0089\u00c0<\u000f\u00f5\u00b4Y4\u00af\u009dGo+\u00d7}\u0000x1\u00efy\u00be\u009dO\u00f6\u0015X\u001dN\u0002\nS\u00ef\u0098\u00fdi!\u008ad\u00e98\u00d7\u00d4S?\u00d5x\u0093m\u009c\u001a*\u00bd\u0016\u0084\u00c9\u0005o\u00e9=\u008b\u00a2\u00a4\u0086.\u00c1QK\u00ad7\u00d5\u00aah \u009d\u00fc\u00e7\u008bTS1Y9\u0090\u00ee\u00eb\u00813\u00aa\u00a6\u001f\u00c2\u00a2l}\u0015\u00e3\u00fe\u001djU&n\u00c8\u00d6P\u00fbKi-\u009e\u00b5\u00ae\u00fdC\u00fb\u00f1\u0083\u00d8\u009a&.\u008a\u00dd\u0004#\u00cf\t:\u00b9\u0007\u00b2\u00a0.\u00fanD+\u00c0\\\u00e4\u00e9\u0006\u00b9\u00ff\u0014\u00c6\u000fN\u0099\u00dd\u00df\u0093V\u00e3GspV\u00e0\u00e2\'\u0082\u0099a\u00e3\u00cb%\u00ec\u00b1\u00c9\u00a7[<7\u0084\u00f6\u00d1\u00bd&B\u0002\u00f9\u0092x*\u00a2UO\t\u000bA\u00ad\u00e4\u0003\u00f0\u0016\u00ffM[\u0096\u00c3\u0081\n\u0012Vw\u00d0\u0000\u00fc\t#\u0007\u00f3wQ\u00f7\u00ee\u0013\"\u00a6\u0083DF_Mj\u00d9\u00b9\u0091\u00a1\u00afh\u00a2: \u0003\u0082\u00df0u\u00e0`\u00af\u00cdK\u0086\u0019\u00e9\u00c4\u00874\u00a6[\u00a9\u00e5\u0013#\u000el\u0085\u008a\u00acn\u0005\u00cf\u00c4g\u00e6\u00ed\u00b0\u00b9\u00c2\u00b7\"c\u00f0p\u00ff\u0013\u0096\u00eb\u00035\u00de\u00af\u0088\u00ed\u00d4\u00e3\u00fc\u00835\u0014+\u00cei\u00d0\u00e3\u00a3NkLz\u0000\u0019\u009aR\u00dbE\\]`\'\u000b.\u00d6$\r \u00d0k\u00e5*27@_\u0011R\u0003\u0012Z\u00a7?Pp\u00ef7\u0087\'\u00a7}B\u00fd\u00be\u00ec\u00d0}~\u00cb\u00e0\u00b5Z0?;X\u00f97\u00e00\u00c1\u00ea}A\u00f3\u0095Vc#\u00e4e\u0000\u009ay\u00b1\u00a7\u001eC\u00e7q)\u00fe\u00b5\u00ae\u00c3\u00b8\u0000\u00ff^VR\u00d8\u00bf\u0099\u00dbjx&\u00beP\u00d2\u00eb+n\u00fd\u00d0\u0010I-\u00ff\u00e9\u00150\u0018\u00a8+\u00f4\u000f/vm\u00c2l\u0093GV\u00b8]\u00ecA\u00a7\u00b8\u00f9\u00f4\u00c9\u00f0\u00f3\u00da\u00c7e\u00b0,\u00fe\u0098+\u001a\u00db\u00fc(_|\u00b5\u00a3\u00df\u00f7,6u\u007f_\u0001\u00bf\r\u00b8uI:3|\f\u00df\u009e\u00ce\u000f\u000f\u0098\u00aeL\u00fd\u0019\u009d\u009f\u0017 w{|w\u00b7\u0006\u00de\u009c\u001a%^z\u009a\u00aa\u00c9c:\u00e0\u0017$\u00d1\u00fd\u0081\u00b6v\u0087\u00b7\u00ee\u00e5\u0094\"\u0094T\u001b\u0087>N@v\u0082\u0091\r\u00d1\u00b0v\u00be\u00e8\u0097\u0018b\u00b1\u00fdAW&\u00d0\u00a3\u00f8e\u00bc\u0089\u00da\u008cJ\u0094\u00f8\u00ae\f\u00ab.\u009e\f\u008cm%\t{\u00e9\u00c2B1\u00c4Oo\u0013\u0012yt\u00d6\u0000sI`\u00a8\u00f1\u0005\u00f5:\u00deV\u00cb.\u00bfv\u00fa.>%\u001a\n\u00fcFxaT\u0012aC\u00b2\u0006\u00a8\u00ad\u00e7A\f\u00b3\u00e3\u0015\n\u00eel\u008c\u00eb\u00b2\u00c4\u00e7&\u00a80\u0097\u00c5\u00ab-\u0005\u0093\u00beC\u00f5,65\n\u00f9P\u0085\u00e7%\u00b9/\u00ac,,l\u0082\u00be\u00c9\u001b\u0092kh)W\u00e9\u000e\u008d\u0014~\u0001\u00adt\u00b6\u0095\u00c9.\u00a8\u009f\u001ex\u0099<\u0096\u00fbe\u0003\u00cd\u00c3}\u00fc\u00d2\u00bc\u0083\u00e0\u00c1CH\u00a9V\u00f1de\u001d$\u00d7\n0|\u001d\u0002\u0084\u00dc\u00a9\u00e0x\u00b1\u00dc\u0093\u00b7A7\u00e3@<\u00f6c2\u0016L\u008d[V4#\u008ac\u00f4\u00f7\u0091A5j\u00a6\u0011)\u00f4\u00f578\u00e5\u00b5\u00e1\u00f8\u0015\u00cf\u00e7\u001f\u00fc\u00f1k\u00bc2X\u0091{W\u00cf\u000b\u00f2\u00ae2#\fKE\u00daV\u00a4\bL\u0084\u00fc\u0019t5\u00d2LsX\u00a7,5f.m{\u00f4Z\u00ab\u00c5\u00be\u00bb\f\u00e7\u001e\'\u00dc,\u00e9U\fm\u0012\u009d1\u0085\u0010\u00fe[B\u00b8U\u00b4D4SZpU\u001c\u00bfy\u00e4\u00aa\u00b3kN8)\u00dd\u00d1\u00a7F\u008d\u00d8Q\u00bc\u008d\u00da\u00e6w\u00a7\u00f9X\u00c2A*\u00bb\u00e7\u00e9\u00dd\u00ed\u0016f\u00a8\u00e7\u0012QA\u00b1\u00d3\u0018\u001d\u00a6\u00d1\u009c\u00c5\"\u001c\foH\u0007\u0015\u00f3\u009a\'\u00b2\u00d94\u0007\u0015\u001cK\u00b5W;\u0016~\u00d7\u009e\u0018\u00c0\u000b\u008a\u009a\u0091f\u00a2\u008c\u00df\u00fb\u00d8&\n\u00c765`x\u00b6\u009f+\u0014z\u001b\u00a5vs\u007f\u009bc\u00a48\u0088\\N\r\u008e>\u00dd/\u00f8$\u00bf\u00e9\u00dfME\u00e5\u0010Y\u00e5\u00b5M9\u00f9\u00eb\u0010I\u0091\u0000\u0097A\u00a2+\u0095\u00dd\u007fkJ\u00f9\u00e0\u00afQ\u00da(B\u0090\u0097\u00e5\u00ceZ\u00fd\u00ed\u00ac1\u00dd\u00b4\u009f\u00d6E\u0096\u0007>\u0010\u00c9\u0005]\u00fe\u00b3\u00dc\u008d\u00bc_X\u0011\u0092\u0000[F\u00e8\u0015\u001e\u00aa\u00f9\u00dcUWG\u009d\u001d1\u008d\u00a7\u0017\\`\u00dd\u008cL\u0086G\u00b5\u001f\u001d\u001f\u00f33\u00df\u00f5\u00cfF?\u0018\u0006TQQ\u0015$&\u00f9u\u00d7F\u00f9S\u00f8\u0002B\u008f\u00cd\u0007\u00d7#\u0001\u0011\u00c5Z\u00dbH\u0018\u00ed\u0005\u00ae\"\u0090\u00aa\u0002\u0001N\u00c5\u0013\u0012\u00fa)\u0017\u00cd\u0094\u00e7\u0087\u00e6\\\u00f8\u0098]q\u0095.\u0016@\u00f3\u0088\u00d1\u00bf\u00d4!$\u00cb\u00e6\b\u0019\u00b1;\u00b1\u00b1\u00de\u00daF\u00fa\u008a+v\u0088\u00c2gL\u0084\u00807\u00b9>\u00b5\u0090\u00ac\u00a1`\u009f\u001c*\u00ce\u0087h\u0016\u00f5,\u00d3\u00c7\u00bd\u00ac\u00f2\u007f_\u00b4\u00aa\u00dc5\u00b1\u00ec\u00a5\u00e6\u00d6\u0010\u0089\u00e2\u0092\u008c(\u0018?\u00e5\u00e7\u0017\u0087\u00bd\u008c}\u00d78\u00e5\u00a6\u00a2\u00f3\u00aao\u00e7e\u000f\u008a\u0004r\u00ee1\u00fa\u00d8)|\u0015.\u0001\u00be\u00e5\u009e\u00cd\u00c6\u0001\u00bfQ^\u00cf[\u00dc!@\u00daFy\u0085\u009b\u001e\u00ccl\u00c5;\u00db\u00bd\u0082dx\u001d\u0085\u00ea\u00ed\u0018\u00d3N(\u00b3O\u009cY\u00dc\u00ca/\u00a5O\u0092V\u00ebe\u00e0\u009c\u00a5;5\u001aaB\u00a5\u00d3k\u000f\u0010\u00b5r\u00c7\u00fb\u00b3$\u00ea\u0088\u00936\u009a\u009a\u00b1\f\u00a7 \u00de\u00a4\u007f\u0093>\u00e7\u00139y\u0004\u001b\u00a1\u0013/m\u00e0\u0086\u0096\u00f3a\u0015\u00fdQM\u00bd\nLa\u00e8\u0084u\u0004>\u00d3\u00d2\u00b5\u00da\u00aa\u001d\u00ee\u0087\u00b8\"\u0018u:Ox\u00e5\u00a0j\t\u00f1\u00ec)\u00d3\u00e9\u00e9^N\u00b1o\u0095\u00c2\u0090L\u0097\u00f14\u0083\u00da\u00d7?\u00b4K\u00b5)1,\u000f\u0013*\u001a\u0002\u00d4\u0016\\\u00b7\u00ff{&\u00c0\u0094\u00c5c\u0000\u009f\u00f4PU0X([\u001b0\u00ec\u00cco4d\u00ba5\u00bdz\u00a3\u00afV\u0005\f=\u0000M\u0003bj\u009b\u00cf\u00db\u00af+<\u00daC\u00d9\u008b~\u00ce\u00f5=6^\r\u00f0\u00c54\u0081A<i\u00ca\u00edf:|\u008a\u008d\u0002\u00b8\u0092\u00efW6\u00ed\u00d4\u001f\u0082\u00a1F\"\u00a33\u00c7\b\u0085\u00ee\u00d6i\u00bd\u00d5\f\u00e9\u00ac\u0014T\u00c1\u00b2K\u00b2\u00b4Y\u0002OB\u00ece\u0099\u001b\u00e2\u00c7\u0004\u00f3 4\u00e5:O\u0082\u009f\u00ad\u00f5\f\u00a5\u00a7\u00b1\u00e8\u0085=\u00d4\u00a0\u00f4s/\u00dab\u00ca\u0097\u00d3#\u00f3p\u0099q\u0095\u00a3\u00f9\u00e7\u00df\u00ab\u00b4\u00d9\u0085\u00e6RF\u00dc\u00f8\u0098\u0006\u000f\u00f0<\u00819\u00eb\u009f\u00b1a\u0002Jf=\u0096\u00ea\u007f\u00f5y\u00a2[\'|\u00cfb5\u0094G\u00ca\u00b1\u00b1\u00aeX\u00de\u00bc\u00b8\u00df\u00b6\u00b1\u000b\u00a7\u00ac\u0005\u001f4Q\u0007N\u00a4\u00d0\u008d\u00b2\u0098\u00b0\u00f0K\u00bb\u008e\u00ab\'\u001c\u00aay\u00a7\u00b8\u008d\u00bc$r\u0005\u0097\u0096\\-gy\u00f2E\u00c1\u00e1\u00cb\u0086\u00dfc\u00d6\u00d7h\u001c\u00c0\u008a~\u00a3\u00d7Y\u009c\f[\u001d\u00ac8\u00c2\u00ce\u00a0\u00a7\u00ee\u00ef\u0091\u0093\u00b0\u008d.\u00cbr*r\u00c3A\u00d41\u00db=0\u0013\u00aau\u00f8\u00ba\u008a\u0013\u00f9\u0096\u0089\u00f7e\u00c2\u00dd\u00e4\u00be\u00961 \u00a6\u00ee\u0012y(0-\u0087\u00ffqW\u00ca@\u00c9\u00a9\u00a8YX\u008b\u00e3\"\u001fT\u001dhl\u00ff$h\u0013\u00bd\u00e3c\u00ca\u001c\u001d\u001d?\u008ad\u00db\u00eb\u0003r&\u000f\u00b0D\u00aa\u00c9\u00d4\u0000\u00d1\u0089^\u009bK\u0019\u000e\u00f2\u0085c\u00a4\u00bcS@\u0082\u009a[Q\u00e4\u00aeN\u00fa\u00c6\u00a8\u00bb\u00b4\u0014P\u0097\f\u00a2\u00bb\u00f9\u00ec`md]\u00f2yN\u00a8U\u0017\u00bc>\u0097\u0005\u008ff\u00cfY\u009f[\u00ab\u000eLI\u00fb\u00afC\u0000\u00c2\u00df2!\u0083\u0096\u00f1\u0003Kk\u00f5\'{q\u00b1\u0084:\u00c8\u0013\u007f\u001c\u00fc\u009f2\u00f4\u0082g\u0019]\u00e2\u0099\u00864\u00f7\u0095\u00e5sV\u0093\u00a6\u00e7 \f{\u00e3\"\u00c0\u001f`Pk\u00cdeO\u0099\u00dd\f\u00fc\u00f99\u00f1r}\b\u00c7\u0002\u00f7\u00ab|\u0095\u00c2RT\u00cfo\u001e\u0096\u00fa\u00be\u0092\u00ebld\u00d2\u00e4-n\u000b\u00de\u00b8,$\u0091nH\u00df>\u0015\u0013\u00ae<\u0012\u00bf\u00b0\u0011NA\u00c3\u00a1C (2\u00d0i\u00f5\u001c\u0088u\u008d\u0005,\u0098y\u008b\u0088,%kf\u001b\u00abi\u00c8y.\u00eb\u00daf\u000b\u0011\u009b\u007f\u00dc\u00daMr\u0010\u00d6\u00e6\u008d\u007ffN.AbO\u00e7e\u00d5N4\u00dc\u001f\u001b\u00ef\u00af\u00eb|\u000f\n\u009d1\u00a2wc0&j\u00e9\u00d4\u00e8#\u00a4\u00a5\u0080V\u0086\u000bU\u00baZ\u00abW\u009eG2\u0089Gre\u00c9\u001f\u0084\u00d6\u00afG\u0001S\u00a3\u00b4[\u00d4\u0016\u000f\u00fb\u00a3\u00beTw\u00abT\u00c4U8!Q\u008c\u001d\u00eam\u00f2\u00eb\u009c\u00ac\u0019t\u00ed\u0000+ZnjLP\u00c0\u0015\u00f7\u00d6\f\u00a6\u00db^\u008a\u0012\u00c0N\u0005\u00eec1\u00bdD\u00c6\u0087\u00aa\u0017\u0084^\u00a6Dw\u0097\u000f:8\u0004\u00a3}\u008e]\u0096\'\u0004;~g\u00dc\u0096l\u00d0\u009e \u00fbZ\u00abc\u00e1\u00a20\u00f9\u0097I*$\u00d0\u00d2\u0002e=\u00f4\u001b*\u00f3\u00d8k\u0091\u008bg\u00db\"=3\u0018R$t_\u00f8*\u00a1jM\u0089)\u0017\u00a4/\u00acY\u0088\u00be\u00d1\u00b9\u009aP%\u0096M*\'\u0002yM\u00e3\u00ee\u00f6\u00f9\u00dc\u00db4\u00af{\u00b7\u00e7pY05mJ\u00e7\u0002\u00a3\u000e\u0085\u00d3\u00e1K\u00f4\u0002\u001c(\u00d6\u000b9\u00aa\u00c9X+\u00b8\u00b1\u00b1\u009d\u0003Q\u009d\u00b5\u00c1f\n\u00d0i\u00d9K\u0098\u00964i F)\u000b\u00e6-\u00c6\u0096\'\u00eb\u00b7\u00e8\u0084\u00df\tx\u00f8\u00a7`\u00b3\r\u00f9A4\b\u00ad)\u0019\rK\u0099\u00e1O\u00deFJ\'\u0082\u00d9\u00f4\u00f2\u00f5\u001b\u008d\t\u00b8\u00c4\u00ce\u00f4\u00f7Z\u00d7m-\u00b9\u001d?6N9\u00feY\u007fq\u00c9Dy\u0004L\u001b\u00d1\u00ddB\u0086(\u00a5\u0092\u00a09\u0094W\u00f9\u001cz\u0098$\u00da)U\u00ba\u00a9b\u0083Lo\u0093\u009a\u00c5\u00ad[\u0015%d\f\u0004\u0010pOaN\u0018\u00ade\u00d7-\r\u00c3\u00f1\u009b\u0007\u00be\u0085R\u0091\u0089i\u00d0\u00e9\u00da\u0012\u0095\u00e9{r\u00e1X\u00d2\"\u0002l,\u00c3\u00ee\u00f9\u00d6f\u00bb\u0091\u00d7\u00c1~/\u008f\u00fa\u00acQP\u00ce\u00e9\u00e5]\u009c\u00ae\u00ebjN\u00e5:\u00c8\u0093\u009e\u00dc%9\u00c2SS\u00f9\u00be\r\u00c6Ur\r0\u0000P\u008d\u0018\u00d6F\u00c6 \u008a\u00b0\u009a\u00d5;\u0087>3\u00ddq|v\u009dd&\u00fc\u000e\u00d4\\~\u009crW>\u00ed\u00c4X\u0091D\u00fca\b\u00ba\u00f1\u0014\u00a4\r\u008c\u00de\u00ba)\u00ed_\u00bb\t\u00c8\nxSK\u00d8\u00f0\u00f5h\u0017\fY\u00896~\u00afP0dc4h\u00f9\u00ef\u0018Qg\u009c\'\u00c1\u00f2\u00c6\u0012\u00ea\u000fz\u00dfd\u00b6\u0098\u00cd\u00d5Sv\u00f7a\u0010\u00b9?7\u00ba\u00c4u>S\u00cbb\u00c2\u0019JP>cP\u00bfBKe\u00a3S\u00ce\u009c\u0090|\u008cOe\u0087}\u0084c/`f\u0016\u009a\u0001\u009a\u00e7u\u00dfk\u00b6\u00bf\u0005\u00e5h\u00e1\u00a1$\u00a0\u00ac\u00ee-\u00b9eo\u0086,\u008eQ\u00f0\u00bd\u0084X\u0080\u0007@y\u0014\u00a0Y\u00c3<\u00df\u00a9\u00d8\u0010\u00af\u00b7\u00a9R\u00a5E\u00f1[M\f\u001f\u00ff\u00f6\u00c9\u00f4!\u00e2\u009d\u00f9\u00dec1\u00feH\u00b8\u0088r\u0017,\u00c3\u00bb\u00c3\u00c9;U7\u00c3E\u00e2\u0019\u00f9\u00fay\u0007\u00d86\u00ec\u00c2\u0000\u00ed\u00e3\u00eb\u00ee\u00c8&\u009aE5YG\u0092c8l*\u00cd\u00bdN\u0002\u0080\u0017\u00dc\u00f5V\u0015j\u00c9/X\u0094OY\u00b6J\u0018\u00f2\u00b5\u00a6{\u0080\u00a1\u0006\u00e7M\u00cb\u0098\u00cf\u00b9\u00e9\u0094\u00c0\'\u00ed]\u00b1\u00a4i\u0006\u00e1\u001f \u00bd]h\u0016\u0087\u00e0\u0001R\u0082\u00ec\u00c2\u009d89\u00d4#\u0096\u00ae3*7Bb\u0099\u0002\u00bb2\u0096E\u00eb\u00b3ed\u00ba\u00baxW3\u00a6\u0098\u00ef=\u00be\u0019W\u00b9\u00bd\u00da\u009d\u00c4\u00f1}\u0012\u00fd@\u0091nm\u00b6_\u001f\u00cd\u0001\u00a3\u0004\u0089U8\u00f55v\u00fa\u00e6\u00e3A\u0016\u0015\u00baR&\u00ffD\u00c5q\u0080\u0005\u0083\u0015\u00b6\u00d5\u008d\u00cb\u000087\u0014\u0016n:t\r\u0001\u00a2\u0006\u0010`\u00aep7:C\u0004\u00d7e\u00ce\u001c\u00074\u00ceD\u00b3e7\u00ed,.=\u00ben`\u00c98\u00c1W7~\u009f\u007f\u00fb\u00eb\u001d\u0086\u00b2[\u00c4Z\u00ad\u0099R\u0082\u00ac\\\u0006\u00dfpT\u0015\u00df\u00dd\u00ce\u00ec\u00demiB\u00b7\u008c\u00c7\u0010\u0013\u0098(\u0085e\f\u0099(\u00ddO\u0087\u0006\u000e\u00f5\u007f6\u0005\u0084\u00aa(H\u00df\u009a\u00e6\u00fa!\u0004{wA:M\u00b6\u00c1\u0007\u0001Z\u0013Kb\u00e8\u00c2\u001b\u00ebP\u000f\u00a0z\u0086H\u00f4\u00904\u00a9\u00e4\u00e0\u00d61\u001bS?`\u00c5\u00b7\b\u00c2\u00ec\u00a4u\u00ac\'\u00a0\u0005\u008f6\u00e5\u000b\u008f\u0005\u00a0\u00b2?\u0002d\u00fe\u00d8\u00d7\u0007\u00f2\u00d6#\u0007} g\u009a\u00f1\u00a3wa4\u00e9\u0018\u00a0\u00c7.\u0004Hb\u00b6\u00dd\u00a7ir\u0085\u00dd\u00b2Z<\u00e9\u00e8\u001b\b\u0012J\u00b6\u000bwf\u00c3\u0015\u009f\u00f9\u00ce\u00bd\u000b\u00df\u00fd\u00a8\u00ff\u00a4Gum\u00d0rI\u00eb\u00f9~c\u0000\u00fc\u008b\u008a2<\u00d62\u00c6&\u00e6\f\u0085\u008eR\u00df\u00c2TJf\u0006L@\u0086\u000fC\u0004$\u00d2N\u008aMu\u00190d\u00fb\u00a9C\u0001\u008f\u0005 d{6\"l\u00bf[\u00e6\u00e6\u00b9\u00aa\u00eb\u0013f\u000b\u00ff\u0004.\u0017G\u0089\u00b1\u00ab_\u00b8\u0084\u00e1\u0002\u001dm+B<Z\u00da\u009aZ\u00f4N\u00c4\u00f6\u0080\u00c5\u00d0q/Q\u00d3\u00a7\u00f9\u00f9\fN,\u00d3\u00d0L\u00a6\u00d5\u00a7\u00e8x\u00e1!\t\u00da\u00bb\u0086\u0011\u00aeM/PC\u00ea\u0001\u00d5U\u00daC\u0081\u00f5\u0012\u00c7I\t\u0088\u0080\tT\u00acA\u0095\u008dPY?\u00ad<\u000f\u00c6\u0000\u00f1\u00fc\u00fb<jF\u0007\u00dd\u00f7\u00c1G\u001ep\u0085\u00ac\u00ee\u000e\u00e9E\u007f\u00cch\u0094\u0086\u00d1\u00f0\u00df\u00d4=yT\u00b3\u00b1[\u00a0\u009b\u0010\u00a0\u00ad\u00ffF\u0005\u00a3\u0083k\u00ef\u00ec\u00a8X\u00f9V\u001c\u00d8\u00d8\u00d7\u00cd1qq\u00a6\u0082\u000b\t8X\u00a8w\u0084\u00be\u00b1\u00ab\u00db\u00a6C\u0094\u0019CN\u00c0\u0011\u00c2h\u00ee\u00b3\u001a>n\u00d7~\u00ed\u00eb\u000f\u00b3\u00c3\u00f0!)\u00cd5\u00d5\u00c7~\u001b[\u00f3\u009a\u00f4\u0005\u0095\u0086\u00d5\u00bb\u00b1\u00c7\u00c4\n\u00d9\u0094\u0004\u0006\u00d0l\u00f4\u0082b@\u0012\u00a3\u0019\u00b4\u008aQo\th\u00b2\u0003*\u00a5\u00d7!\u008f\u00bf\u00e2\u0095\u00ed\u00fde0\u0099\u00a9q\u0097J! \u00afh3\u0095\u00b7C\u009c\u0096 N\u00f4\bbT\u00f2=]\u00ec\u009a\u001f\u00c5\'\u00e6\u00d5\u00c4\u00f3\u0082\t\u00e8\u0002\u008d\u0092\u00f1K\u0082v$d\u001dk\u00d5\u001e\u00e0\u00c5N\u00af\u0088\u00a9a\u009d\u00f2d\u00c6\u00b8s$\u00f8`\u00c5\u00b1K\u00e4a\u001f\u00f8\u00cd\u00c8\u0001\u00bf\u009eW\u00e1.Pn\u0005y$\u00a6n\u0098\u0011V\u00bcm(\f\u00d0\b\u008a\u0097\u00a8\u0087;\u00c5q]{\u008d\u00b8\u00e1\u00b6\u00ce\u00cd\u00b9\u00d4t\u00ac\u0007\u00b9\u00f0\u00ce\u00cf\u0095+Na\u00dd\u0019\u009d\u00a1\u00fbD\u00ee\u00f9\\\u00b8\u008bc.\u00b6\u00ffE\u00e0\u00e5\u0012\u00ed&q\u00a7L\u0089l\u0083\t\u00b9;(\u0080\u0080\u00e2=\\\u00a7F\u00fa\u00e0&N\u0083\u00ea\u00e0\u001e8\u008e\u0000\u000fFR\u0093\u00b3\u00c9\u00d4i(;\u00b1=tL\u00a8\u00b43\u008c\u00b8\u0099\u00afb/o\u00e0^\u00f2F\u00a6akn\n%a\u00eb\u001f\u00d3\u001f\u00b8\t\u0082\u008f\u00f2j\u0085Y\u0096E\u00e1\u00f68h\u00e4d\u00d7\u009b\u00b0-\u009c?\u00bc\u00df\u00d4\u009a`\u008b\u00fe\u0006\u001f\u00a9\u00e2D\u00ac\u0017\u001e\b}\u00c3\u008b|\u00f2u\u00b1\u00caR\u00d8\u0091\u0001j(=k\u00fa,\u0090Z:\u00fb\u0088\u00a1r\u00ae\u0005\u00fb/\u008b\u00d8\u0005\u009e\u00a9\u00db]\u00d4\u00f6\u00f1\r\u00e4\u0018\u0098\u00c8]\u0080k\u00b9l\u00d9#\r\u0080\u0083\u00e9\u009bn-R\u008d\u00ecc\u00e4\u00872\u00af\u0098^\u0086Q\u00cb\u0015q\u00b8\u00c8\u00af\u00f6\u00a8\u00d8\u00bd\u00b5`4\u00feU:I6,\u00b3\u008b\u0005\u00fb\u0090\u008c\u0085K\u0083V\u00f3\u009a!\u00ae\u0014\u000f+m\u00b3\u00ab\u00c2q\u00fa\u0087\u00f5\u0099\u00deMP\u008e\u0092\u0081`;6_\u0010\u00f7f\u00efl(ik\u00d7\u0083\u0088\u008e\u001e\u00be/\u009b\f\u00e1J\u00df\u00f5\u00ef\u00bde\u008d\u00b3|[\u00ae\u0015\u00032IxL\u000b\u00b0u\u000bq\u00cb\u001e\fc\u00cc\u00c3e\u00edRN;LwBzM\u0003\u0000i\u00cf\u0081\u00ffI\u00ce\u00c1`\u00a9\u00a8j\u0011\u000b!\u00b4\u00d1\u008ct\u00de$\u00f1X\u0002\u00da\u00ed\u00b7s>G\u0085u\u0097\u00fcE\u00e9L\u00faa\u00a2\u00c7|\u00e75%\u00bc\u00e8\u0011\u00a1KF@p\u00a8hC_\u00df0\u0015l\u00b1\u00d1\u00e7\u00e5\u00abL6\u00a5\u00d9w\u008b\u00db\u00d4B:f\u008a\u00b9\f\u008c>\u0016\u0083DV\u00f5\u00a5\u00e6=A\u00b1\u0005\u00b8\u0080\u00e8j\u00fa\u0092\u00bf\u0019g\u00048\"\u0006\u0090&\u0019H\u00afEuMR8\u00e9\u00f1M\u00deY\u001fH\u00cf\u00c5a\u000e\u0006f\u00d5\u0083\u00f2\u00e4rQ{@\u001eRyc:G\u000e-\u00e1\u00f7\u00cc\u00dc\u00ac\u009a\u0017\u00f9KP\u00dfUe\u0093\u00f5\u00d9}\u0006\"U\u00d1q\u00ff\u00b3\u0007\u00bf\u00b7et\u00ac\u00a1\u0014PYi\u00bey\u00f3T\u000b\u00e6\u00f9\u000f\u00beX\u008b\u00e9h\u008d\u00eb\u0098n\u00c7\u009bd\u0017\u00eb\u001b\u00ff\u00a4\u00f8\u0099\u00bf\u00da\u00a4\u00ccY9p\u00ab[C\u00a8\u00d9\u00bbi\u00e2r\u00a1\u009c\u009etb\u00ac\u0095\u0004*[S\u00d0\u0081G!P?\u00de3\u00b1bO\u00a2R\u00c0p\u00fd\u00eb\u0007,\u0081\u00ba\u009d\u00ff\u0002\u0083fx\u00a7\u00a8\u00e9{x\u00ceP\u0092\u00de&\u0015\u00a7\u0099j\u00aa\u0090\u00d0\u00e6p\u00df\u00aa\u0080\u0013\u00e8L\u008b\u000e\u0091\u0014\u00f73\u00cd\u00fc\u0089\\5P\u00aa\u001c?$%D\u00fe\u008a\u00b4\u009e\u00c9\u0094\u00c1]\u00ffg3Q,K\u00e4\u00f2%\u00a4\u00a2\u0017\u0083(\u00e7\u00c46\u00d5\u000bG\u0017@BD\u001e\u00f4\u00e6Q\u0095h\u00b7\u00ac\u00c1\u00f0h\u0082k\u00ce\u0088\u00dd\f\u00fek\u00f2\u00cd\u0088\u00e6\u000eO\u0005\u00d5\u00e2]^\u00a7W\u008b\u0005\u008f\u00e2` \u00ed\u00003\u000f\u00c6\u00cb>QF\u00ff\u00ad\u0007\u0014Lc\u001a2W\u001b\u0019\u009d\u0005\u008b\u00e4\u0095P\u00ff\u0084\u0002eVD\u00deS\u00de$Cr4l\u0012\u00cem\u00f2#-\u00d4\u0083\u000b8\u00abu\u00de\b\u00d1\u0013UO\u00f4\u0004C\u00ca\u00c2\u00dc\u001b\u00d7Y\u00a2(\u00b7\u00acCw\u00e7|\u0014q3\u008d\u00b8Wm\u00a8\u00d4z!\u00ebs\u00c9\u00e3Nq\u00d4AT\u001f?v\u00a0\u0003\u00a2S<\u000b\u00d8\u00a2\u00f9I\u00dfj\u0006\u00d5\u0018>y+\u00f7\u00e2\u00c0\u0085\u0003+\u009fv\u00f1\u00a9\u00d8\u008a\u009aZ\u00a3\u00bbX\u0016)\r\f\u00d4\u00f9v\u00b0i\u009e\u0097\u00e4L\u00e0\u00c4\u0007\u0014H<\u0080\\\u008e:\u00a8s\u00dc\u00e6\u0007\t\u0092\u009f\u0081\"j\u00b9\u00cdA\u00e9\u00a8\u0004)\u00aa\u000b\u00cb\u001b\u0097\u0015\u00d3yP\u00cam@\u00d2\u00f7^\u0096\u00bb\u00b2\u0087\u008flE\u0004L\u00b3?zA\u00c8B\u0001$#\u00d62\u00fci\u00cb\u008f\u00e9v%\u0088!O\u00ee.\u00f4\u00a1v\u0000?G\u00e2\u0019\u001e\u00183\u00b0\u0018\u00c6\u00d0\u0016/\u0095\u00b2)\u00c6K\u0094\u00c8U\u0001\u00e6\u000f\u00ab\u00d5+\u00bb\u00cb\u00ee\u0084\u00c1\u007f\u00cf\u001d\u00f3\u00f8\u00b2\u00b78x\u00ba\u00e8\u00e8\u0099\u00a4\u008e\u00b0\u00d3\u00ec\u001f\b(\u00ff\u00e4M5\u00ef\u00ab\u00db\u00a0\u0094\u009b0\'\u008fW\u00ed\u00d0\u00d6\u00b1\u00ca\u00bd\u00f9\u00aai\t\u00d4\u00dco\u00e2E\u00d3-\u008d5!3\u0007]W\u00ad2\u00d6\u00fa-\u00f2k\u00f8\u00ba\u0017\\\u0089$T\u0006Z\u008c\u00a0\u00ec\u0083n;\u00ab\u00c4\u0013\u000bVz\u008c\u0006\u00a0Y\u0095\u00e9\u00feU\u00b3\u0080\u00e1(\u001d@i\u00ed\u00f7\u00d3\u00a3\u008f \u00d6\u0093\u00fc5\u00a7\u00d6[\u00fa\u0015\n\u00a2DZ*D\u0096Ev8&gy\u0088\u00a6`U%\'F\u00bd~T\u009d\u0092\u0016\u00eb\u00c1h<7\u00e5D\u00e9F\u0080\u00ab\u00a4\u0099\u00d2\u00d9R\u00d7\u00d8\u0007f\u00f1z\ri\u00e5(\u00b2\u00dc]GH\u00eb\u00e0\nt\u00e4\u00a5KbEhM\u00f3U\u0017\u001bf)AQ\u0012\u00e1\u00ef\u00e2\u0090\u00c3\u0017\u0094~\u00d8\u00bf\u00a4\u00c6r\u001b]{}a\u00d3\u009d-\u00f5c\u00fb>\u00a1\u001fj\u00b4w\u00e6\r\u008f\u00adI\u00f4\u00fa\u009a\u001d5\u00b5\u00bf\u00ec\u001dAI(qnE\u00c9?\u00b4J\u0099\u0085\u00e6\u00db\u00c6\u000ecG\u0091\u00c0\u0018&\u00e3s\u0007\u00d8\u00e0lsw\u00e0U\u00fc\u00b7\u00fd2$\u00a9\u00ac1t\u00ff\u00d0\u00dcWL\u00d3\u001a\f\u0096!pL\u00996\r\u008f4B\u00f2\u0018\u0012\u00b6\u0095\u00e1\u00ac\u00f2\u00fd\u0091\u00eenL\u00bf4\u00bd.\u00e8\u00a0\u00e3\u001eEl-K.\u00e2\u00ff2\u00ed\u00c5\u00e3g\u0011\u00ab;\u00f4\t\u00c7Pl\u00eaH,\u00fb\u0098f \u0004W\u00c5\u00df\u008d\u00a1:\u009f\u0086}X\u00c6\u00fe:\u00f0=;(N\u00c0z\u00c9\u00cd\u0016a\u0015R\u00b0\u00af\u00f6`\u00ee]\u00bexvEZ\u00cfO\u00c41\u00b3\u0085x\u00eeNwz\u0098\u00a6@\u00cc\u00c6k\u00cc{Y\u00e0f\u0094\u00d3\u00c0\u00f1\u00d8\u00e1\u00ab\u001b\u00ff\u00e8\u0088,0vs\u00fakxk\u00ea\u0004\u00b6\u00c7Q\u0006$m(}\u00c2\u009f(\u001f~\u008cL\u008cXY\u00fc1\u00f61{\u00d8\u009eP\u0015Bl\u00dd\u00d3\u0096\u00ba\u00a5HAo\u00eb\u00ff=\u00c0\u00f5n\u00e3\u00bbf~\u00ef\u000b8\u007f\u00dbK\u001e\u00a3\u00c5\u0089*\nu\u00b6\'\u00bd9\u0013\u00aa)H\u009a\u00ec\u000f\u0084z\u00a1b2,\u00cbOb\u008f\u00db\u00c1\u00c1\u0017\u00f5\rT\n\u0004\u0080\u0003V\u00fa\u0012\u0086\u00e5\u00f2\u00d7\u00f8\u00bb\u00fc\u0014ye\u00afL\u0010{\u00ec-\u00d8\u00d8\u00a8\u0094\u0094\'\u00b0\u008eA\u00c6\u0080ey!IfO\u0015\u00b0\u00ff\u00d0\u00de8\u00ae\u00fb\u0087\u001d\u00eb\u00ed\u00dc\u009a\u0080\u001a\u00c3E{\u0083\u0086W\u00ef\u00fb\u0005`\u00e3\u0006\u0013\u00ae\u00f1!o4K(\u008fP\u009e\u0081\u00fc\u00d9%\u00b3G\u00cdd#\u00fb\u00df.\u00c0\t\u00e3\u00f9\u00af\u0003\u0090\u00f1\u0018\u00a6\u00a6\u00b3 j\u0018O\u009b\u0083\u00fa\u00cc\u00f53t\u009e\u0099\n4d&\u00b6\u00d5\u001aj9\u00e9\u0098\u008f:+\n\r\u00ac%\u00d5\u00c5\u0000\u000f\u00be\u001c\u00ee`\u00a5\t\\\"\u00aeH\u0018g\u0098\u00a1\u00ccRbn4f\u0091\u00db\u001e\u0016\u0086n>\u00fb\u00b1\u00f9 \u00dd[8\u0006\u00feC\u0090\u009c\u007f5\u00cf\u00a9%\u00b7\u0019\u00a7B\u00e4\u00ca\u00efOC\u001f\u00d9\u008c\u000b5-\u0092\r\b?\u00f4-\u0001&w\u00edJo\u0097\u00d7\u00de\u00a1)\u00a2\u00ec\u008a0\u00bc\u00c5^P\u00fe:\u007fC\u00ad\u009fxz\r\u00f5t/t0$\u00e0e\u00b5\u00c8\u00b2\u0012\u00d1>\u0019\u00d6\u00c5\u00b3\u0089\u00c8\u0090\u0013;i\u00937\u0080$\u0013VSN\u00ac\u00bf<\u00dd\u00eaE\u00fc\u0084Yih\u00bb\t\u008d\u0005R+\u00d4\u00c4\u00b1\u00d6\u00b1\u00b8{\u001b\u00e2\u00c9\u00a3\u008e>\u0087\u00ba\u008f\u00db&~\u00b7f\u00f6\u00ab\u0011\u00f7xT\u00123\u00f7t\u00a8i\u00f0\u00f2\u00b9\u00dd\u00a2\u007f}\u00b6\u0084\u00da\u001b\u007fU\u0080\u00db-\u0081\u0004!\u00c5\u0002\u0086\u00cc>\u00e4\u00cd\u0013\u00f0\'>\u0018e!^\u00bb\t\u0096\u00b2\u0015W.\u008e\u00e3\u00de\u00bc\u00d0xQ\u00bf\u00b8\u008c\u00f5\u007f\u009cV;\u00d4\u001f\u000fv/\u008f\u008b\u00b1O\u00a9\u0012\u00b0A\u00eb!\u00e5\u0088X=\u00bf\u00b2\u00b7\u0095\u00b8.\u00ad\u00a9\u007f\u000b0\u0090S\u00b9In\u0004\u00e7\u00d5G\u0012\bu\u00edx\u00d8\u00d5\u00ae\u0087V\u0004OT1\u00b2\u00ae\u00e4\u000f\u00c3(\u00a6\b\u00f8\u00b5J?/[KK\u00a0k\u00dd\u0097\\(\u00bcPA\u00c6\u00e9\u001a\r\u00c6W\u009cxi\u00c0^\u00df\u000b\u00da\u001b!\u000bsu\u00dde\u001f\u00fb\u00b6\u00a7\u0007\u000b{\u00e0\u0004\u00c0\u00fbR9X\u00c4\u0007\u00cf\u00f8k\u00cf\u0083\u00bb\u00e6\'N\u001d#\u009e\u0093\u00c9\u00a4\u00f4i\u00cb\f\u009c\u000f\u009c\u0000\u0089\u00de\u0081\u00bfC\u001c\u00db\u008a\u0084Yz@h\u00c2\u00f1\u0002]=\u0000\u00ebu\u0004@\u009e\u000b\u00ee\u00ed:L@\u00fe8\u00da\u00a8\u0080\u00b6u\u0016\u0088\u00b8\u0089~\u00e8U\u00ae\u0005\u00b0\u0096\u00efQ0\u00d0\u00bd\u008fw\u0010\u00d2P/\u00d82\u00ce\u0016\u00a09\u00be>\u0005\u00cb\u00f6)\u009f\'\u0090P=_\u0084\u00e0\u0088\u008f\u00bc\u00de\u00dc{|\u00e3/r\u00e9\u00caOqG\u0093r\u000b\u0093\u0013\u00f1\f\u00ad\u00ca/\u009d\u0093\u0098\u00f7+x\u001c:\u0098q\u00c8\u00e85^\u00e1\u00c5\u00b9\u00e0O\u009c\u00a1\u00e6\u00ed8n3\u001b\u000e\u00fb.\u0010\u00bb\u00df\u00a9]YD\u0082\u00d8\u00d1\u00f0\f\u00f7\u0004\u0018\u0015\u00016\u0014\u0011\u001a\u0082\u00bc3I\u00df\u00ea\u00ab\\\u0007/\u00b7\u001f`\u0096\u008f\u00a9+E\u00b0\u00a24\u001c\u00df\u00ea\u00b6\u001f\u008f\u0016gJ6\u00ed\u00b1\u00a5\u0085\u00c1\u00c8\u0086\u00e0\u009dm% {\u008aA\u009a\u0003w\u00f5\u0098\u0010S\u00fb\u00af\u00be\u0085\u00b2\u00bd\u0097\u0007\u008c\u00e1\u000eX\u00c9\u00dd\u0091_\u00cdI|!\u000f\u009bw#\u00d2\u00c8G\u0080q\u000e\u00d1\'\u00b7\u008e\u00c4UG?\u00b5\u00b5S\u00bc\u0089\u00abg\u0094\u00ad\u00aeC\u0017,\u00c6\u00e3q\u00a1\u00d3eM\u00e7\u00f8&\u00f1_\u00fdZj\u0017\u001azQ\u00c0\u008f\u0084\u008e\u00fa\u00dc\u00eae5r\u00c1?r\u00cd 5\u00bd\u00f3}4\u00eb\u00d90\u0092\u00dey\u0098\u00be\u0099T)gP\u0099e\u008cu\u0002\u00e5US6C\u00f6S\u0089\u00dc\u00f3\u00b6\u0094L\u0085X{\u00982\u0097\u00e1:\u00ef\u00ef\u00e1\u0006\r\u00ae\u008a\u00e3x\u0001s.\u00e8\u00fd\u00ea\u00a2\u0011\u00f4\u00db\u0083\u00d6\'-\u0091o`R\u00e4\u001f\u009d!\u00c6\u00d0\u00ed\u00a2/t\ny\u009e\u00ff%\r\u0092?\u001dx\u00b9\u00cb9\u00eb\u00da\u00c8\u00d7f{\u0007\u00ee\u00e2\u0090\u00e4\u0017\u0019\u00c8\u00d1\u00fbh4B\u00ee\u00ebF\u00e8\u000e\u00ef\u00a7\u0080\u009b\u00e6z|\u008as\u00bb\u008b\u00c8\u008a\u0019\u0002\u0004a\u00e0\u0012\u00b0\u00a5KU\u00ee\u00bd-\u0017z\u00c2\u00c2\u0089\u00c5,=\u001d\u00cehi\u00b1^\u001f\u0010\u00ca>\u0015\u00e0\u0004n\u0090\u008b&\u00a7\u00ec\u0003\u00b3\u00ce\u00f4>H\u00e4\u008c\u00a9\u0005\u0003\u00df\u00ec{\u00d0\u0006\u00122\u00ebu\u0090\u00a2[\u00e2\u00b1\u00eeN;\u00c8\u0006\bg\u009e_!\u0015\u001f\\\u00c2\u00b6\u0084\u00d2\rB:d=0\u00dcq\u0096\u00d7\u00ac)\u00ae\u0081\u00f5\u00c0\u00f2\u00f14\u0094\u008b4\u00c3\u00bb\u001c\r \u00b6\u008d\u001d^\r0$\u00e4\u00df\u00d0\u00e2\u00d4\u00de\u0095\u000fGiV&Fu\u0090p\u001b\u00e2\u0095%G\u0012O\u00bc(\u0001\u00f6\u007f \u000eP`\u00c2\u00d6h\u00c3\u00df\u00a6C\u00f4\u00a1V\"\u00bd\u001dzF7\u0097t\u00df\t\u0000=II2\u00d1zR<\u00cf\u0004\u00be\u00c6\u001f\u00f0\u00c1\u00dc_\u00ac\u0097\u0007<7\u00a1\u0019\u001e\u00fb\u00d5\u0011\'C\u00c6\u00d0p\u00abN\u00ca\u0003\u00bav%\u0093\u00d4\u00bf\u009bX\u00b2\u00b76\u0017\u00d0\u0089\u00b8$\u00bfmG\u0095\u008e`\u009a&*\u00a1\\\u00af5S\u0002G\u0017O\u0010_\u0001\u00e7a\u001d\u0087\u008dYN\u0014\u00a9\u008b\u00bd\u0015w\u0000\u0000\u00df\u00a2\u00a9}*Z\u00e9nC\u0019ix\u001c\u00b8\u0089\u00b4d\u00eb\u00ff\u0015qY\u009d[p\u0010\u00d7,\u0000c\u00cf\u00ff*u\u00ad\u00ca8y\u00f0\u00d9E9x\u001c [O\u0014\u00ec\\\u009fa\u0018\t\u001e\u00b9\u00cb\u007f\fck_\u00e7L4\u00d2\u0004{\u000ee\u00d4D\u00a7\u008d\u0005\u00a4\u00b9\u00ef\u00fd\u00d6!9\u00bb\u00d5\u00b0\u0003\u00fb\u00b9\u0014\u00e8\u0096p(|\u00a3\u00dc\u00d7\u000e\u00c62/\u00bbOD\u00b1\u00f5-\u00e4j\u00ca\u0006\u00baG\u00f7M\u0099\u00bbL\u0084&\u0085\u0089r9/\u00a6\u0093\u0011W\u00cb\u00f8\u00b8\u0010b\n\u00f8\u00d7\u00e1:G\u001bdy\u00cd\u0097y\u009c\u009a;\u00b2\u00dcH\u00a9\r\bC\u00ef\u00c3\u009ck\u0015\u0016\u0090\r\u00e8\u00e6\u00d7\u00ec\n6\f5\u00da-\u000f\u0010\u0000{ U\u00c0q|\u00d5\u0088K\u00bd\u00e2\u0019l\u009eH\u0012<\u00e4\u0013\u00a6\u008c*6l\u00fey8WL\u0011p\u0010\u00e8\u000e\u007f\u00e2\u00df-N\u0094\u0010\u00c7lt\u00cb(.\u00c9\u00ca\u00e5P\u0086\u00b10.\fk-Y\u00ac\u00bf}}b\u00aa\u00f7\u0001\u0099\u0093\u00eb=\u00c5w\u00b6\u00df8\u001e\u00bf\u001a\u00deB\u00c8D\u00d5\u00e1\u001eZ\u0006\u00ac\u00885\u00ebV\u0005s)b\u0006\u00d1\u0003\u00935\u00e3lXC\u0086iO\'X\u001f\u00fd\u007f\u00e5M5!\u00fa\u00a5\u000f\u00f5H\u00ec\u0015P\u0007M\u0096c\"\u0003\u00ffG\u00cc7D\u00d8\u0012\u00be;Fic\u00c6\u0098\u00a4\u00a6l\u0087\u00c3\u00f4\u00faA\u00f9\u00e2w\u0012\u007f\u00a1\u00d3$mP\u00bd\u00ca\u00ce\u00f4\u0094R\u00ac\u0084\u0010\nm\u00b0\u009a\u00f1\u0097\u00b9N\u008fAB/o\u00d77\rg\u0091\u00a74l\u00d5g\u00abh\u00ec|\n\u0084\u0085\u0011O\u00e1\u0098A$\u00d1:\u00dd\u00c7dc!\u00e9\u008b\u0091-\u00ff\u0005\u008bq\u00ec\u0019^\u00d8\u00c9\u00d0\u00a8Z}\u00f8W/\u00f2:0\u00e1e\u00d9?\u00d5G\u00cc\u00aaW;\u00ef-\u00bd\u00f7\u00b0K\u0010.\u0097\u0087\u0088\u00ee\u00a9=\u00ad\u001fgh\u00190\u009a\u0095\u0010\u000bR\t\u00f3\u00e5\u00fd\u008eBU\u0099\u00edG\u00df\u0088s\u001c\u0014M\u00b3Jv\u00ee;\u00af\u00cbv\u0082t^\u00b5\u00cc\u008b\u0000Z.\u00d4\u00be!}1\b\u00eay}\u000b\u0098s\u00d2\u00f3)\u00f4gv<\u0019\u0081\u00ec*_\u00d1|\u001b\u001d\u00a1\u00a0l\u009eJ\u0018\n\r:#k\u00b8\u0015=9\u00d1D\u009a\u00c4\u00a4\u0083\u00ed\u0089!\u00a2p\u009b\u00152\u00da\u00f05\u00dc+\u00ca\u00dc\u00e5\u00c7\u0090\u00d5\u00f9!\u0014\u00e8\u00c5\u0010\u00c0E\u001b\r\u00adcl{\u00c8T\u00a1Kc\u00fa\u0015].K\u0086\u00de:\u00d5\u00a6S\u001el\u00cd\u00a5\u0085k\u00ff@\u00f8\u0015{\'C\u00e6M\u0015\u00fe\u00a8~\u0014L\u0080\u0086\u00ee\u00f9\u00d9zF\u00ae\u00cfNY\u00e8\u0012\u0005M\u00c2\u00d3\u00f2P\u00eb;i\u00b2\u00ba\"\u00c9:><H\"\u00bb\u0086\u00b1\u007f}X\u00d2=8\u00ed\u00e2\u00b5S\u0089\u0086K\u00ef\u009fU\u001dw\u00dcYo\u00b5No-\u0019\u00edd\u00ceT\u00a9~=\u00d8\u0083\u00e6\u0017\u00ec\u00d1\u00c1\u00ec\u0005\u0088b\\\u00829p\u00c20~B\u0093\u00faA\'\u00a9\u00f4\u00d8\u001a8a\u0007\u00b0U\u0096\u00a9\u001f\u008d\u0014\u00d1\u00edO+i\u00e6\u0088u\u00a5\u00eei\u000e\u008c\u00cf)\u00d0\u00a8\u00ed\u009e\u00d0A\u00c5!p\u0006\u0007\u00e71\u0084!\u00c7BP\u00f3h_n\u009e2\u00f8q\u00f6yk\u00a4$\u00f4j\u0091\u0089k\u00feiDW\u00b5\u0083\u00ed\u0093*\u0018\u00cd\"\u00c6\u00a3\u00fa%\u00c3B\u00cc\u00ff\u001eW\u0003\u00a4\u00ca(\u00b88\u00fd\u00d6\u0093\u0016<\u00c7\u001d0\u009f\u000b\u001e%#\u001e\u008e&\u00f8\u0015tD\u00ce\u0010\u00d4\u000b\u0002\u001f\bW\u00f0\u00a4\u00bd\u00f9\u00e5\u00dcu\u000b\u00c7,\u00d3\u009d6\u0081\u00e1\u00ed\u008fw\u0088,\u00e6\u0089\u00fb}6\u00d2\"\u00ec\u00f00R\n\u00c2k\u00ad\'x,\u00bc\u00d9\u00d2T\u00f3?\u00ac\u00c6<)k\'\u00140\u00d9*\u00c8\u00f1\u0099?\u00f9\r\fg\u00b7\u00f3{\u0012X=\u00e5f]o\u00edXS\u001f\u00af\u00d2\u00b2\u0019\u0083\\\u000e`>\u00bdZ[G\u00e9\u00c7\u00d0\u00ea\u009b~\u009c\u00a3\u001f\u001a\u00d3\u00bb\fW\\\u00dc\u0091\u000ei\u00fb\u00cb\u00078\u00c6\u00f7\u0084\u00ccf\t\u00ba}\u00bd\u0000b\u000e\u00b4c\u009d\u00d0_\u0095\u0095\u009e\u008b\u00a6A\u008eU^\u00a7\u00bf\u00a3\u0092\u0083\b(),\u00d8\u00a4\u00d4\u00ebQM>\u00beZ?\u008d\u00aau\u0085\u00b6\u0090c \u00c22\u00163X\u00f3\u009c\u009bPC\u000e\u0090\u008d;\u00d0L\u0005\u00f7|t~\u0097\u009f\u00a5\u00d5 \u00c3\u00fe\u009e[W\u00e2E\u009ch\u0089k%F\u00fcn\u0004fMT\u00067\nM(\u007fZ{\u0093\u008f\u00d7S\\U\u00fa Xw\u00c6\u00a0~\u009e6Y\u00a1\u00d4\u008c\u0098\u00fez\u00a6\u00f7\u0003B\u0019\u00fa\u00e4+\u00018VX\u00b3\u001d\u00ed\u00a7pe\nKgV\u0087<O(\u00f4\u00bf\u00f9\'>[\u00e9\u00ef\u0098\u0007\u00d7[\u00a8\u00d9\u00a3\u0091\u000b:\r\u00ac\u009bmc\u00e6F\u009c\u00b7\\\u0096\u00f7\b\u00f6\u008c\u0091U\u0094\u0002:\u008b\u00fc<\u00db29\u00b5\u00db\u00b7u\u00e5_<n\u00bcJ\u007f\u001c\u00f0\u009d\u00cc\u00d6$\u00fc\u0082\u00b9\u00a2\u0012VX\u00a5\u0085\u00ddoz`z\u00f5\u00d2\u00b4-H\u0010\u0090\u00a7\u001cMq{\u0084\u00cf\u00feN\u00a9\u000b2\u0005e\u00d7\u0097\u00c8\u00c9\u0082\u001d\u00c1\u00029\u00c9\u0007\u00b2\u00c4\u0091G\u00f0\u009b3\u00c1@K\u009a\u00d0j\u00fa}\u00fehA\u0007,\u00fe\u0006\u00db\u00c1vh9\u00f8\u00b6\u00e5\u00c8B \u00d9\u0083\u00b3\u000b\u00d6\u001e\u0017|\u00d9\u00e60\u00faVX\u00dc\u0018\u00e59{\u0010\u00cf\u00e6\u0016r\u000b^t:\u00e7\u00b2\u0089_)\u00f3B\u00cb\u00a7\u00ba\u00c5\u0004\u00a1\u0015Y!\u00ab?jOC\u001d\u00e0\u0013T\u008b\u0082\u001c\u00fe\u00009\\\u00f3Upy\u00f0\u00e4\u00d2\u00feN\u00f4\u00fa\u00d4\u0005\u00ac\u00ac\u00ad\u00c9+\u008b./\u00ed\u00a75\u00aa\u00f3\u001a\u00e5\u00b2CR\u0004\u00ad\u00f7\u00df\u00f6\u0092i\u00e8\u00be$\u0086\u00eb\u001c\u008as\u0011<K\u00ac\u0082\u00acM\u0093R\u0011\u0080\u00bbj\u0087\u00f7XI5\"\u0010\u008e\b\u00c4\u00e4oJ\u00cc\n\u00d0k\u0013\u00d4\u00acwh)\u0087\u00c6\u00bbx\u00ea\u00c8|\"\u00e5:\u0084\u00ff\u00b3\u009a\u00951\\\u00d0X\u0084/\u0088\\cQ\fW\u009c\u00df\u000f]\u0090\u0084\u00fb\u00a3\u00cf1\r\u00d0\u00c9\u00ff`\b\u00adF\u001a\u001e\u0098\u0005C1\u0085d\u00b0\u00f5\u00f2\u00fd\u001f$\u00a4\u0012\u0007\u00e5\u00f1a\u00ab+\u00e7G\u0091y\u0082\u008e*5\u00cb\u00f9\u00f6\u00a8\u00fb\u00b3\u0018\u00d8\u00aa\r\u009fW 2\u00ee\u00e0\u00ce\u00d0\u00c6R\u0093|\u00cbU\u00fa>[\u00c1\u00b4\u00e9\u00bb_\u009c\u00bc\u00f1\u00b9\u0001\u00efb:\u0084dV\u00e6\u00ba\b\u00f5\u00d5\u00ef\u00b0s\u00ad\u00f7\u00b3s9\u00fd\u0016\u008ck\u00c9=:\u0010E/\u00fd\u0097\u00eem4\t\u00f2\u0000\u001e\u00a6\u0099\u00bc(\u00bf\u0011\u0084\u0019yH\u008e\u00c1(\u00f6\u00aa\t\u001a4\u00a5c0o\u00ed\u00f8:\u00fb2\u00e8Ab*\u00db\u00a8\u001d\u0012\u00ef\u001e\u009e`\u0014\u0081\u00bf\t\u009d;J\u0005\u008dn\u0088z\u0017%\u0012\u00ea\u00e7\u009c\u00e7\u009fvTT\u00d9\u00fco\u00005_\u00d2\u00e3\u00e1G:|w\u00ce\u00b9\u0096\u00aa\u00a5N\u0016gV\u0083\u00dbNH\u00d81\u00cfo|\u00a4\u00df\u00a5\u00d0\u00eb\u0099$t~P\u009dFH\u0003\u00ed\u00ef\u0081H\u001a\u00f1\u00ac\u00b6A\u00b8\u00b9n\u00e2\u009e\u0088\u00dc\u0005\u00ad\n\u00c4s\u00b7kR\u00ae\u00fb%\u0003N\u007f\u00ceR\u00af\u00e5\u0014U:\u0013\u00d4T\u008dE\u0002G\u00a3\u0080\u00ebz\u00b6\u00b0b\u00c5qs\u00afr\u000f$R\u0098s\u001c\u00c3\u00bb\b}\u0010\u001c\u0092\u00e74\u001f\u00ef\u00f2\u00c3\u000b\u0003\u0091\u00f8p\n\u00e56\u0091\u00b7\u00ec\u009a\u00d8\u0015\u001cLp`o\u007f\u00a1\u00a8s\u00c8\u00b9\u0090<q\u00e6\u0003\u0096\u00aa9w\u00d9\u00f2q\u00eb%\u0005\u001e\'N\u00a2\b#\u00f5\u001c\u0007F\u00ae\u0086jO\u00c3\u00f6y\u0089M-\u00a9.\u00d0\u0016\u00c2g\u001e\u00eb\u00d0\u001bI\u00cc>\u00e4\u00b2\u0005x3Y\u00cf\u0086\u009f^\u0083\u0090\u007f\u00f8\u001c6\u00af\u00d9\u0092\u009b\u00f3Z\u00c3\u00bd,\u0086\u00b1\u008f9\u00deRU\u00e31\u00cd\u00da\u00a4\b\u00b07\u00e7\u00c68Q\u00fe\u00da\u00d7\u000ei\u00de\u00edZIP\u0099$\u009e\u0084\u00ddP\u00ebr\u00b4\u00c1/\u00f1#\u00eb4\u0096\u00d10\u0015\u0002\u00d4{\u00bb\u0002\u00c3\u0019\u009c\u0091\u00db\u00e8b\u0007 $\u00a5\u00a9\u009a\u00a0\u0094\u0011\u00afmM\u00aaw4\u00b9\u00f4\u0080\u00ddf\"J\u00d7\u0086\u00dbS{S\u000f\u008a\u00dco\u00e3\rsT\u00bb\u009b\u001c1`3\u0010T\u001a\u00f6R\r7\u0015\u00d1\u00ea\u00e4\u0006\u00b0\u001f{1rZ9\u0085]\u00df\u00b4w9\u000f\u00aa\u00c4\u00fa\u00c3\u00de\u00ab\u00a1$\u00f2\u00d02\u00be*\u00aa\\b\u0083\u00a6\u00f5)\u00ec\u009e\u00c8>N\u0097F\u0092\u0019,\u00038\u00d8\u0000i\u00d9\u00d0\u0091kJ\u00b7\u00d5\u00d2\u00ea\u001f*}\u00dd\u0015\u0015{fSO1.\u00b4;\u001b\u008ah\u00a1D\u00e65\u00ceQ\u00b0F\u00beW\u0010\u0016\u00da\u00f8\u00dc\u008eI\u0093\u00a8\u0006\u00a2\u00d8\u00da\u0081T Xz\u001f*\u0090\u0096\n\u00df%\u00af\u00fa\u00ecm\u00d4\u00fd\u00e2/4wo\u00e3\u00ef\u00d7e\u00fe!}c>ft{\u001a\r6zX\u00ac\u0014H=~\u0006\u00c7\u00f2bZ@\u00b3f\u00925\u00da]\u00fd\u00f1\b\u00b32\u00c6S\u00e9\u0093\u00c9\u00a9\u00a0\u00dd\u00e5\u0096:\u00b3\u00a5\u0088\u00b8\u00cc\u0090\u00c5\u00ab\u00b7%}\u00ec<.\u00f4\u0084\u00cd\u008a\u00a3A\u0088\u00b7\u0086\u00a5\u0097F\u009f\u00d1\u0091\u00fd\u0095V\u00a5\u0088H\u00c9\u00c6L\u0099\u00db%\u00c8\u00f8\u0019]\u00d84G\u00c1\u00c5nQZEv\u000fLa\u00ee\u00f5\u00b6)\u00c1\u0096\u0004\u00ab\r2\u0090i\u00ed\u00d6s\u0088tr\u00b6n-\u00b9\u0092\u00ae\u00a4\u00cf\u00dfM\u00cb{\u00c92\u00c0\u00ab\u00ebz\u00ab\u009b\u0085D\"(\u0016(<\u00a0\u008a\u00bf\u00a5B\u00ae\u0017l\u00d1\u00f4\u00d0;{\u00e1\u007f\u00ea\u0088\u00dcR\u00bc\u0011v\u00ca\b\u0097\u00d1^\u0082\u0083\u00f8\u00ebWp\u0001K\u00d1 w\u0087(f\u00b1\u0084\u00d1\u00fbd\u008c\u0003u\u00ea\u00a3=@;\u0089&_\u0081\u00c0\u00d8\u0080\u0095\u00d9D\u00dfw;(\u00f2\u00f8\u00a5\u00a2\u00f3\u00a8\u0015\u00dd\u00f2C\u00e7\u00f3\u00d5\u00e3\u008c\u00e1l\u00c8\u00d0\\z=\u00e5\u0003\u00e0SaF\u00c70+\u00bb\u00dd\u0019\u00a7\u00c0\u009c)&\u00ab\u00bc:\u00ae\u0087+\u00a0\u0016\u0018I\u00ee1\u00f5\u00c1{~\u00ae\u00cf\u0092 w<j\u00cc\u00aa\u00ab\u00cf2f\u00f84\u00ed\u00a40\u00e2!\u0090\u00ebY\u0082\u0003\u0018q\u00bf\u000e\u00f6[\u0000a.\u00cd\u009dy2\u00fc \u00f1+\u0087\u00ef\u0000&\u001a\u00beZ\u0003\u001fFTc\u008b\u00c1S\u00f0A\u00d7\u00f2\u00ee-\u00c5\u00ab\u00aau`\u00c6E\u00b2\u00db`\u0004X\'\u00cb\u009d\u00fdU\u00e0:{!\u00d9\u00ff\u00e5b\u0080\u00bc\u00ca&p\u00b0\u000e.\u00c9&\u00f2\u00f2\u0016\'\u00ebr?v\u008b\u00d2YK\u00b2\u007f\u00ea0\u00fa\b\u0084\u007f\u00bcg\u00f2i\u00d7h\u00a5,)`]\u0004_*[/\u00f8\\\u0017\u009b\u00f3\u00a7\u00c0q\u0086\u00805\u00b7\u00d6\u0099\u0099\u0087s\u008a\u0090\u00d0{m\u00c1\u00e6!\u0006\u00ad\u00b6og\u00da\u0094\u00b9\u00fa*\u0097\u0094\u00ae\u0019\u00ca_\u00d3\u00be\u00c6\u00b0\u00c9\u000b\u001dpq8\u00cf\u0099\u00cbH/\u0010\u00a0\u00e60\u000b\u0019\u00e0\u00c8\u0003\u00b0\u000b=!\u00c6\u009fr\u00c1\u00ab5A\u00b7\u0096-\u0084\nH\u00a2\u0019s\u00e2Hb\u00ae\u00e2\u00ee\u00a6\u0018.\u0084v<\u00ac\u00e5\u00a7\u00c3\u00af\u001d\u00188\u00ccLY5\u00ca\u00b4\u0002\u00fdM*=\u00ce\u0089\u000b\u00a3\u0017\u009d?%\u00f4\u00e1\u0011\u00b0\u00c2\u00d4\u00efN\u00b5\f\u0003\u00ef\u009a*8\u00f7\u0015j\u009c\t\u00e0\u00cd\u0002`&\u0006\u00be\u00a6\u00b4\u00b8D}%X}\u00b0\u008cf|\u00053\u00e7\u00c5\u00e5\u00b1\u00d6\u0014\u00c8\u00dc8\\C\u0012\u0002O-s\u00bd\u0098\u00fc\u00c2\u00b6\u00c6\u0001\u00b2\u00ac\u0083\u00d2\u0090\u00c5D{8/\u00df\u00a5\u00c5\u00bctS\u0089\u00d2\u00f8\u0004\u00b6j\u00b1u\u0002\u001a\u00f1^\u00fbA\u00e1\u00a0\u00b7\u00c9\u00cc\"g\u00f2G\u00a5\u0088\u00b0(\u00d4\u0085\u00a8\u00d7\u00ac\u00ee\u00f5m\u00a7&\b\u00af\u0010\u00da@\u00d9\u0088\u00e3S\u0000\u00cb\u00a1\u00a9\u00b7\u001a\u00b8/\u00e6\u00a2\u0096\u0011\u00cd\u001f\u00d0\u001dT:\u00fdV\u00f5Cj\n\u008ec1\u00ec\u00a6\u000e/Wb\u00b9\u009ep:\u0000\u00d9T\u009a\u0097\u00b2D\u008c\u0081\u00e6u\u0012\ry\u009c\u00a0S2g\u0014*~\u0019\u00fb\u00bd\u00d8\u00e8\u00a8x\u00c0\u00e3]k@Q\u00de\u00fb\n\u00fe\u00a8Xn\u00d3\u0012S\u00a6\u00f4\u00cc\u00bb\u00cd\u00e6\u00af\u00ed\u008b\u00e5\u00c4\u0000A\u0095\u00efYQ\u00ba\u00c6k#S\u00b6\u00d8\u00ff\u00a0\u0014\u00bb\u00ea]\u00b4Ub\u00c5\u00f3\u00b0\u00a6\r\u008a\u00af%)\u00b2\u00c8\u000b4\u00f0-\u00d5U\u00ea\u00d7\u00eb)o\u0087E([\u0095\u0005E\u0091\u00961\u0001Q\u0010\u00bb\u0084\u0007M\u00d5W\u00adw\u0002?\u00a9\u00db=HKD\u00dc?\u00f7X]\u009b\u00ba\u0006= \u0017\u0080\u00ba\u008e\u00e6\u0090\u009fe\"\u001b2\u0013\u00bdZ\u00ad\u00c4\u0010\u00c4\u00d0E\\\u0019\u0083\u00ddk\u00b8\u00d8g\u00f9\u0088~\bq%5RQ^q\u00f0A+:\u0007\u00ee\u0019\u0003\\O\u0086=\u00e6pK`\u00feGG\u00edI~Z\n\r7\u0097L[\u00fd\u0099_6\u00eb\u00d1Et\u00ad\u00bb\u00b7\u00b2\t\u008ci\u00d2LF[d\u00c0a\u00e30\u0010\u00aeSqiY\u00e8\u009f1=\".\u00e4\u00da\u0005\u0000\u001c\u00a3\u00b3\u0018(\u00f4b\u00bd\u00d1mnQ\u00cc\u00a2\u00c7\u0096\u00df!,5.[t\u00dft\u00e8\u0000\u00b6:\u00f3\u0014E\u00e4\u0019\'\u00a8\u00b2P\t\u00cc8\u00cb\u0019oI\u00db\u00fa\u00db<\u00ef\u00ddi\u00e1\u0018\u000f&\u00c7\u000b\u00ce\u00fe\u00b3\u00d1\u009c\u0098\u00fa\u00d6\u00c0l+\u00b1\u00f1\u00cbpb\u0013d\u00d9\u00fc\u0006 \u008ew\u009c\u00da\u00e6</aA\u00fcp\u00e7(\u0080\u0084\u0090\u00df\u0013~!\u00fc\u0097\u00e6\u00cb\u000f\u00a1\u00bb\u0093\u00dduQ\u0019\u00ff|\u00e1{\u00c8j2\u0096yr[\u00cbKm\u00bb\u00c7\u00dd\u00a5\u00af\u00f7f\"\u00ab\u0096]\u0081\u00cf\u008e\u001f\u008a\u0013\\`\u00ac\u001f%\u0019\u008ej>P\u00dd\u009e1P\u00ab\u0005[\u00b6\u008e\u0080\u00ea}*h\u0082\u00fd\u00c4\u00dd\u00b1\u00a3\u001e(\u00b4\u00ce\u00f0`$\u00acJ\r0\u0094.\u00e4\u00ee\u0005\u00e2\u00eb\u00abR\u00a8\u00c0\"\u00a8\u00a3I\"\u00a4\u00da\u00fbe\u001eo.\u00e9\u0084\u00fd7\u0010\u0083\u00f7\u009c\u00b4\u00fb\u007f\u00fa8\u00d0{*\u00d2\u00e2\u00c00\u00e35\u00d6\u00ccUx\u00eb=\u009f\u009dNs\u008co\u00ad\u00a4k\u0016\u00b9A-\u00f1\u0019X\u001e\u0016\u007f@\\\u0000\u00c8\t\u0085g\u00f2C*z\u0088n\u00fd\u00d0E98\u00f8\u0099K\u009d\\)\u0091\u00e2\u00cbn&\u00f6\u008b\u00a6\u0084\u00bbC\u0080\u000f\u0001\u009ao\u0005.\u008f\u007f\u0087\u0016}5\u00c6\u00d7\u0086~\u0091\u00ab\u001e\u0013Jd\u00c8kJ0\u00ef&Q\u00f7\u00cf/\u00d7\u0083\u00ea\u00ca\u00d0\u008d\u00a6Phx\u00a1\u00eb\u00c4a;\u00de\u001bG\u0012\u00ce\u007f\u000fq\u00b4\u00ed\u0018\u00a9\u00a9\u00bf\u001c_\u00d7\u009c\u008f\u00e1\u0012\u00de\u0093o\u00d2V\u00d2\u00b3$|\u0099jr.\u00a7C\u00a1\u00af.\u00d2G\n\f\u00dc\u0005r\u00e8GxI.\u00b3\u00cc)\f1p\u00b2\u00cc\u0099\u008eSDC\u00d7l\u00af?\u00c3Y1\u0006\u00ffx\u0092U#\u00f8.\u00ed\u00cf\u000f\u00ae\u0080\u00ac^\u00fc5\u0097{\u0006\u00bd8%d=\u0002x\u00de\u0089ms\u008d\u00a4\u0080\u00fa\u00e9\u00e9\u00962}<\u001e1i!\u00a1\b:P\u00bd\b\u00cf\u00d1\u00f8\u00ec\u00e6\u00b2\u00fe\u00f6\u0092\u00e2\u0083`\u00ae\u0082\t\u00c9|\u00bftZ\u0085\u0094~[\u0019\u00fd\u00bagd\u00fc\u0099\u0087\u00fd\u00b8G1W<io\u0016\u00caS\u00c9\u008fL\u00a2&\u00c7\u00fc\u00d7\u000f\u00b1\u00ab+0Db\\r\u00b2\u0093\u00f6\u00bf|\u001e\u0015\u00df\rG:\u0094\u00f8\u00d8\u00e2\u00f6g|?k)]\u0098\u00f8\u0084\u00f0^h#\u00f2N\u009b$\"\u00b2\u008d\u00060\t\u00d4WXHb3SX\u0007\u00f8(6\u0019#9\u00c4u6\u00e1\'\u0017\u00a6\u008f\u001d\u00b1\u008eN]\u00a9\u0082\u0007\u00c3\u00d2\u001f\u0095\u001c\u00ae\u00a4\u0095\u00fb\u00b0\u00f9&\u00aal\u0081i=\u00e5\u0003\u00db\u00d1\u0094\u00fbWP\u0080\u0004\u00da\u0002)\u009e1\u00857\u0091\u0003\u0083\u0082G\u00ba<\u00d5\u001f\fL\u00f1\u00f6\u00a0\u0017\u00f8\u00c6\u00e3G\u0082\'!\u00f5\u009b\u001bE\u008e@\b\u00ef\u00de\u000b<\u00f8d\u00ed\u00c8\u0018d\u00a8B\u0089\u0012\u0094\u009c\u00a3%\u0093B\u00ea\u00fbs*\u000b\u0003\u00dc\u0092\u00f8g\u00c8\u00db\u0094\u00bd\u00df3Na\u00a9\u00df\u00f9I\u00a4\u001c\u0095B\u00bb\u00ec\u00f0?\u00cb\u00b1\n\u00de\u00b93\u008e\f\u0012\u00cd\u009b\u0097\u0006\u00b8\u008d\u0086\u00f9\u00a2\u00c7\u00b9&\u00f6(\u00a4\u000f)\u00fel\u00d8\u0098P\u00bbg\u00127\u00cb\u00c9Z\u009a\u00ca^\u00b7\u00f93/\u000e\u0095\u0094Wm3\u00edq\u009c\u00c2o[&\u00ca\u00c8\u0003\u00dc\u00c7\u009d~\u00a7\u00ef\n\u00cdn;\u00ff\u00c7x\u00ffN0\n\u0094\u00b0\u00fdA\u00c7\u00ae\u0087M\u00cb\u00e4\u0002\u00a4\u00f1y\u0012\u00b5|\u00f5\u0099DaJ\u00caOH({\u008dU%;\u00b7\u009f\u0001\u001c\u00aa0\u0090|\u00fd\u001a\u008cM@\u00f7.\u00b0\u0085\u00ff\u00ff\u00f6\u00c7\u008b\u00a5\u00f5Q\u009c\u0087>\u00c0\u0012\u00e7\u008b\u00cc\u00aa\u00ef{\u00a0\u00e3\u00fe\n\u00f2\u00fc\u00e2\u0096\u00f7\u00d6\u00b5\u00f9\u00acziJY\u00d5-\u009a0V\u0003\u0094t\u0006\u00a0\u00f0\u00a4\\v\u00c6\u0013\u001c\u00f7\u0003s1\u000bk\u0015\u00c9\u00e5\u0015\u0082P[\u00a7\u00ea\u009ft0\u000f\u00a2Z\u000e\u00d4\u001b\u00cf\u00a0\u00e9\u0092|\u001a\u00f6 \u000e\u001e\u00b8\u00a6&2@kxSJ\u00a0\u00ab\u00e2iN\u00a4\t\u0004\u008d+VcX \u00bba\u0007\u008arE4.\u00a8\u00b3|\u00ae\u00b4%\u00adFJ\u00882\u00cb\u00126Q\u0094 \u00b4`Qc_\u00ef\u00c2\u001ev\u00a4\u0087X\u0089\u00cd\u00a8\u0097\u001a\u00dbs\u001c:/bpIO\u00ea\u00a5W\u009bh\u0091v\u0005\u0019_\u0087\u00f4\u00f2\u00f4\u00de\u00fd\u00e6oVx\u00ff~H\b\u00a6\u00e9&g\u00a1\u00c2\u00db\u00fd\u00c8y\u00e5\u0019.(\u0088\u00f4\u00c9\u00c2\u00be\u001e\u001e\u007f\u00fav\u00c0MK\u00fc\u00ff\u00defL|LA%\u0000\u00ddi,\u00c6\u0093:\u00a3\n\u0097\u00d1-\u00f8\u001b\r,0\u00aeZ\u008cq#\f8\u0095^b\u0019\u00e5~\u00ad\u00f3y\"\rD\u00a3\u00deV\u00e0_\u00cc\u00ad\u00b2F\nx]\u0081\u00eb\u00f6\u00cf\u001f\u00b9\u00b74\u00ec^1\u0002\u00d7\u0080\u0098\u00c9\u00b3Z\u00c9\u00a4r\u0080\n\u00aa\u0083\u00e6H\u0015\u00df\u00eb?\u0086\u00f0\u00b3\u008b\u0000\u00bb:]\u00eeUq\u00e5\u00fa\u00b1\u00cf\r\u009e\u0017U\u00f0~E=WepO\u0005\u0087X\u00b6\u00ee8\u009cd\u00ae\u00d9\u00f5O\u00eedl1\bW0\u008d\u00efP\u00d6\u0014\u007f\u00ab\nm\u0090\u00d4\u0004qs\u00f4^\u0088\u00d6\u008c\u00c3\u00d4\u0006\u00fc\u00a7\u000f,N\u0005\u00fe\u00c3 x\u0090\u0083eG\u00e6\u00d7\u00de%\u0003\u00b6\u00e2>\u0092N\u00a5\u00becV\u00f9J\'5\u008f3<\u0014\u001ab\u0011`+\u00bb\u00f0\'&,\u0016t\u00bf1$\u0092\u00ea\u0004L\u0010\u00f1<\u009f\u0091\u00d4fe\u00ee\u00ffVUG\u009c%|\u0084x\u00e4}\u0097\u0090e\u0090\u0007y\u0087\u00cd\f\u00f1\u00ed.\u0089l\u00c7\u008b\u00ee\u00d6\u00eaT\u00b6m\u00f5\u00f3\u00ef\u00f7\u0094\u0084\u00ca`\u00e9\u00a5Z\u00a6}\u0006|$\u00ea\u0010@_\u0090\u00f0\t-{\u00bb\bO\u00bd\r\u00d6?U\u0001\u00a3B\u0091\u00dc\u001b\u0005)R\u00c4\u008e\u00a3\u001cw\u00a3\u00f6\\\u00cb\u00ad\u00d7\u00d8\u0095\u008f\u00f9\u008em^\u00f4\u00d8\u00f7cQ8\u00c3a\u00ebIa\u0090]3\u001c\u0018\u0085\u0012\u00b0e\u00b7Y\u00e0\u0091\u00d9\u00b5\u00ad\u0007\u009a`\u00c3\u00d3\f\u00c5\u00ed\u00b1\u0004x\u00d8\u009f`\u001a\u00f8\u00b7\u00a2\u00f8Y\u0010\u0091p\u00c7\u0091\u00ff\u00d6\u008b\u001a\u00b9\u00fd\u0016}\u00ef\u00f1\u00c1\"\u00d1\u008c,\u0001`imx\u00f3\r}\u0007\u0019\u0002\u0003\u00f0\u00190\u0003\u0019\u00eeA\u00beR\u0005\u0092;\u00ab\u001cu\u0090\u00ecg#l^F\u00f5\u00e3\"\u0002\nY\u0082\u0099\u00fc\u00a5i\u00e1\u00ecy8-<\u0096\u00c9$\u009e\u0093\r\u0083\u00e0\u00fd\u00a8\u00f3\u00a1\u00f9\u00ec\u0088\t\u00c6M\u009bO\u00a5\u00f9\u00f8\u00edkE\u008d\u008d#\u00dc]\u00b8X\u00a9=\u001a\u009a\u00d3H\u00dd\u0014\u00e1q\u00dc5\u00f1i3\u001e\u009a\u00a1g\u00d8\u00b9d;T&t\u00f9hnB&\u00b8\u00b7.p\u00d6`+\u00f4\u0090\u008f)F\u00be\u008b\n\u0089;Q/\u0097\u00be\u00fb]\u0014\u007f\u0093]G\u008b\u0095\u001c9\u00cb\u00d6\u00fd\u00beb\u00d2/c\u00a7\u0007O\u008f\u00c7\u0089R^\u0080\u00c9\u00bf\u001fB\u00a2\u00b3\u00da\u001c\u00ed\u009c\u00e8\u0087K\u00b6\u00bbJz]=\u0092\u0010\u00a0.\u00bc\u0003=\u0089\u001f\u00f7\u00c9S\u00ab\u000f\u009e\u00e1\u007f\u00be)\u00edw\u00b1\u0014b\u00df\u00f4\u00af\u00e9\u007f\u009a\u00a3G\u0018\u00e1\u00e9\u00d5cH\u00e0\u00c7a\u00c7\u00e83\u001a>\u0018\u00e6\u00a3U\"u\u009e\u0099\u00a4\u00fe\u00d4\u00c7p\u00ee\u0080\u009d\u00d9}@\u0091\u00c0BJa\u00c2\u0083\u00d1.\\\u0018\u0088\u001c\u00f6I\u001e\u0002\u00eb\u0097%\u0013q\u00ff\u00882^\u00e8\u0017\u00b7>\u0094\u00b1\u009d\"h|\u00f37Ck!\u00c1r\u00d2c\u00bb\u00ff\u009b\u00cc\u0012\u0095\u008b\u0095\u009a\u00d3\u0095\u009c\u00bf\u00f9\u00f6I\u00dc9B\u00e2\u00b0\u0012\u0080,4\u00bd\u009c\u0081RQ/N$\u00ffH\u00d3Xm\u00b4D\u00d1\u00d0\u0089\u0013\u00d2\u00f3\u009c\u00b4\u009d\u009dT\u00db\u00d5_\u00d6\u00c8L~$o\u000b\u0087f\u00d5qN\u00ec@\u00b6]\nyT\u00e5\u00d2f\u009c\u0011\u007f(`$ClDuS3J\u00d4\u00acE\u00c2\u0014\u0088-\u00f1mJ\u00ff\u00f8\u00d9\u00b2\u009f\u00d5\u00d4\u0099#\u00ee<\u00ed\u00e7\u009e\u00adZ\u00a7S\u00e4\u00d8@\u00fas\u0085\u00be\u00b8p\u00a1\u00f7V\u00a3N\u00c3k~a\u00e6\u00bal\b\u0003\u001ch/\u0089\f\u0000\u00db0\u009c5\u00e3\u00ff\u008fb\u0015\u00c3\u0015\u0016\u00e6\u00acF\u00ae\u0089\u00d0 dRSLD~:\u00ec\u0081g\u00b3\u00c2\u00e0\u0091\u0091\u00853\u0083 2\u00a3pa\u00e9\u00ed\u00e1\u00c5\u00bbM~\u0013Hm\u00d2\u00a4Gt,45d\u00aa\u00c5i7n.\u000bW(\u00807!\u00a0i\u0011\u00fa\u001d\u0018\u00a461\u00ff \u0007\u00f2\u0096S\u00d3\u00a79\u00b9m\u00d9\r\u00f2\u00e6\u00ba3q\u00f8\u00c9?t[\u0016<\u009c\u00e7\u00cc\u00edG\u00e3\u0092\u00b6\u00f4\u00d1\u00c9\u00fa\u00d81\u00dc{\u00b1\u0016\u00b3\u00e3J\u00baL\u000f9\u0098\u00ef\u00f9<T\u00d08\"\u00d9\u00e7Q\u00ed\u00c4%\u00f6\u00b9\u00c3\u00e3)\u00c5\u001c\u0000\f\u008e*\u00abF\u0099\u00fcN\u00fc\u00fa\u00f2\u001b\u0095\u0086?\u00a1Z\u0091\u001aS\u001dRU\u0087S\u00b77<N\u00af\u0096\u00dc?o\u00fc\u00f5y\u0083#\u0015\b\u00870\b,\u00afn/y\u00ec\r|:Z\u008d1=\u00ceni\u000f\u00dd_\u0013\u00ec\u00ccBQ\t\u00ee+}4\u00e8\u00d5I\u0089k\b\u001b\u00bb~\u0000\u00ef\u009b\u00889\u0015F\u00cd\u0001P\u0003\u00b9,\u00ce\'\u00d9\u00f2\u0015\u00d8\u00d1\fY\b\u00b1\u00d7\u00c3\u00c6R\u00f5\u00d6\u00a6\r<rp\u00bf\u00ae}:[\u00c6\u0005\u008d\u001erZ\u00d9\u0019\u00b6\u00f3\u009f\u0082\u00cboH&m\u008cz\u0099\u0092\u009ecq\u00fc\u0019\u0018\u00c5^\u00bf|\u00fc\u00a0B\u008e\u0018%-\u00c2\u00a6s\u00fbg\u000e\u00b6{\u001d\u00b5\u0007\u009e\u000bn\u00a95\u00a20\u00a1\u00d7?\n\u00d5;(\u00a4\u00c7\u00f9e|\u00fb\u00ddd\u00b8[]z\u0012;\u00c8SI\u00ff\u00e6\u008du\u001f\u00b5\u00ae\u0082\u00c4\u000e\u00c68\u0091$\u0089d\u00fe\u0089\u00d8\u00eb\u00b6\u0083]\u00d0\u0013cO\u009f\u00e0\u00cf\u001d\u00efy=\u00c4\u00ee\u00ee\u001e$U\u0095\u0095\u00d4\u00027\u009aL\u00ab8\u000bN\u00c0\u00e5\n\u00a4(n-\u00f1\u0098\u00e2f\u00e1Q\u00ed\u00af\u00b9\u0002\u00db\n\u00db\u00bc\t\u00c7\u00aa\u00bf\u00b3\u0090\u0004\u00974=\u00dcS\u00ad\u00e7-\u00cf4\u00a7[\"\u00ea\u00fd\u008f\u0085\u00ef\u00a4i\u00b0m\u000ej\\]\u0006\u00afD\u00b5\u00far\u00e3\u0081\u008d\u00b93\u0014\u00cc\u0080\u00fcw>L\u0093od\u00fd\u00af\u0098l\u0012\u00e2\u00a6N\u00e0Ge;1\u0087\u0007\u00cf\u001a\u00e5|\u00bb}\u00b8E\u00b2\u00ab\u0017\u0005\u00d0\u001ba0\u00a2\u00d1\u00020\u00a2\u008f#\u00fe\u00b6%\u00d02\u00d9_\u0085RV\u009f!\u00bb\u00a0\u00c5\u0083_\u00e7*\u00f8\\X\u0000\u009fTYt\u0086~\u00eaX\u0084\u001ad{\u00d4\u0083\u00d8\u0004\u00ed\u00ba=i\u00f5e\u008b\u00a6X=y0\u00d5\u00bb\u00ddOz\u00aa3\u0085AM\u0091\u0092\u0019\u00cc\u00c2\u00b1\u00f5\u008b,p\u0012\u00dd\u00ff\u0011\u00d3\u0004\u00bd\u0080\u00eb\u00c4\u0093\u00dfl\u00be\u0018:=\u0087\u00dfb-\u00a3\u008a\u00c0\u00a3\u00ce\u00c7}L\u0088A\u001f\u009d\u00b8\u0017\u001a\u0097@\u0085\u00a6\u0006/H\u00e0\u00e3\fY\u0082W\u00cb\u001b2\u0088%C\u0085\u00e0\u00bd\u00e7}\u0010\u00a7\u00e8\u009e\u008b\u00e2\u0083pp\u0010ua\u009a\u00deN\u00ec\u00d0\u0095&\u00a2\u00e9\u007fL\u00f9\u00f50\u00dd\u0005\u00f9\u00de5a\u00b3\u00c0N \u00ec\u00b6\f4\u00d8\u00d86\u00cb5&\u001b\u00be\n\u00e6\u001f\u00f7X\u009c\u001e5\u00f4#=[\u009b\u0018(\u00c0\u00f3ZbP\u00e7\u00d4\u00e6K,\u00fdz\u0006Y\u009e\u00fd\u00e8\u009c\u0007\u0098\\cp\u00ba\u0086-Ty\u00ad5\u00b5\u0099\u0017\\\u0088F\u00df\u0081\u0084\u0011;Pb\u0087C?t\u0095\u0016{op\u00c6A\u001f\u00fc\u00e0\u0015B(S\u00d6gaj\u00c9\u00133F\u00b0\u0080\u0011\u00cf\u00eda\u00e3.v<B8g\u0085\u00a8OA\u00ceE\u00bfah\n\u009c6\u000b3\u0018Ov_C*\u0098m\u0003\u00be\u00ac\u009e.\u00ee\u00c8\u00fc\u0017\u008a88En\u00e8N\u00eb\u00d4Q\u008b\u00a7`\u00a7\u0012P$*\\\u0090\u0082\u00b9\u0080\u00be|\u00a3\u00b3\u00f9\u00e7t\u0015\u00d0B\"\u009c\u00a8\u00bf\u0007\u008fD\u00e0Q\u00aa\u00dc\u00824\u0002\u00b3\u00f6\u00c4zS\u0003\u00db\u0011\u00cb\u00d3\u0097\n\u0007@\u0085p\u00b8\u00aa\u00bf\u00a2\u00aa@\u0000\u00ac\u0014\u009au\u00b9wa\u00a2b\u009f@f\u009d\u00c3\u00d0F:\u00a8\u00f9\u0086\u009a_\u00b3\u00f7\u009c.P2\u00f4\u00a1\u00cd\u0086{n\u0082\"w\u00ae\u00f8\u00a0n\u00a0\b\u00fd\u001d\u008c\u00d0\u00be!\u0092L\u00c0!7nXe\u00d2\u00a6\"\u00e1\u00f2\u00ca\u00ff\n\u000f\u00aa\u00e6\u000f\u00f3\u00b2\u00a0r\u008d\u0099\u00cf\u0016i\u00da\u0010\u00fad\u0090\u0002\u00ff\u00f1\u0099\"I\u00a3\u00a4\u001f\u00db\u0080`\u00eb8T\u00a4\u00fdh\u00cf\u00cf\u00a4-\u00ce\u00b3\u00e2\u00b9v\u00a2\u0080\u00cf\u00b5?{\u00ab\u00f38\u000f`\u0089 \u001e@\u0001\u00c3p\\\u00a9\u00cf\u00fbb\u00cdrF\u00dcG\u00ac\u00ad!\u00bb\u00f4\u0093\u00a7\u00c8iPC\u00d2\u00fa\u00f7.\u00ca]\u0086\u00cf\u00e1\u00fd\u008dx\u0013s8_\u000b\u00c8\u0082st\t\u009a\u001cv\u00ae\u00c2d\u00c1\u00b2\u00fe\u00c1[g\u00ab\u00e7\u00e3JJl\n\u00b7gw27a\u00b8\u00dd\u00e0\u00c1\u0085$\n\u00ddt\u0093\u0001\u0088\u0002\u00a1\u00dd@E\u00f5\u00faP\u0099N\u00fd\u0094\u00916\u008f:\u00f9Yi\u00be\u0083\u0006\u00a5\u00a9Vc\u00ac\u00197\u00e6tS\u0095\u008fp\u00d8\u00fb\u00d6\u0097\u00be\u00c5\u00af\u00df\u008a\u0006/ph0%\u009b\u00a8=\u0014s(\u009f\u0011\u009fVz\u009d4\u00d7\u0099\u00e9\u00eb\u00cd*\u009a\u00efY\u00ec\u00e9\u000b\u0099S\u008eo0C(\u0015\u00b1\u00d1J\u00e3Cy\u0094\u00b6\u00ca\u0019f\u001c?\u0013\u009c\u0017\u00a0\u00ce\u00ab?\u00f9|\u00a2d\u00d4ll\u00ac~\u00c1\u0011\u009f\u00fcw\u00a8,%\u00f9F@\u00f2\u00f3\u00d1\u0010\u00c3\u00f6E\u00e7\u00e9`\b\u0000B\u00b8\u00a5\u00e6\u00e9\"\u0097\u00b9a\u00a7\u00e5\u001bJ\u00f6\u008f\u00b2\u00f4\u00f6\u00f9\u00e7{)o\u0012\u001c^\u00a0p\u00eb2\u00df\u00f3\t\u0001\u00b8\u009f\"\u00c6\u00b4\u0007\u009eg\u00bfy.\u00bcz4\u00dd\u00814t|\u00cf!\u00a4Y\u0012\u00b7r\u0096\u00e7\u0089\u00147\u0015X\u00e8\u00f4\u0096\u00e4\u00d7\u00ec\u0087\u0099z\u0000^N&\u00e8\u0085\u008d\u0010\u0085\u00a6+\u00e9\u0098\u00d5f\u00fe{\u008cS\u00f4\u00a9\u00b5\u00d6Q\u00adY[/EE\u009e\u00d0\u00f3\u00e8\u00c9\u00ad\u0010\u0014\u00b4~\u00f7Kt\u000e\u001e\u0006\u009a\u00a83\u00cf\u00ab\u00f5\u0098;j\u00bc\u009f\u00c1qU\u00e1\u00cf\u0081\f\u00e8\u0091\u0087\u00b8\u0012\u00e7\u00a4\u00bd8e\u008axL\u0007\u00e7\u00d6\u00b2\u00cd\u001e\u00f0\u00fa\u009d\u00a66m\u000b\u00b4OQ\u0083h\u00e3gO\u001d\u00ce\u0086\u0084{\u00ad,R\u00d58\u00fe\u00fb\u00d9\u009a\u0011\u0005\u00b5\u00b7m[\u00d3\u00fc\u00dfWf\u00e98\u00bd\u00d0LU\u00c1\u00d2\u00f2\u00b6\u0092~!\u0086\u00ce\u008f=\u00c3E\u009d\u00afD\u00dd(\n\u0019\u00dd\u00bb=\u00cc;\u00fd\u00c0\'\u00b3\u000b\u00eb\u00ce\u00f8o8\u00b2\u00e0\u00c6\u00e5n\u0018\u00e9\u00d8y]g\u00fbFSja\u001c\u00bbY\u000b\u0094\u001f\u001c\u00cc\u0017\u00df\u00b9X\u00bd\u00a2\u00a7r/\u0093\u0013@\u00ec\u0016\u00ee\u00f7\u00cdq#5-<\f&\u00f4q\u00f1\u0005\u00a7\u00c5~\u00f9\u000bq\u00d2\u00bb\u0099\u000b\u009a\u008e\u0099\u0001Mf\u00ad\u00f4\u00a3\u00af\u0014L\u00f8\u0015\u00bc\u00aa\u0001\u00d3c\n\u00141\u00a3\u009fb?JT\u00b85\u00dc\u0081\u00ee\u0015\u00f4\u00bd&^\u009a\u00c0\u00d9\u0088\r\u0014\u0006\u009f\u00dc\u00e9.lb&\u000b\u0094\u0081U\u00ed\u00be\u00c2?\u00ce\u00a9\u00a6\u008e\u0005L\u00f5Oq\u00e0\u00b8\u0084;\t\u0001M\u00f9\u00ff\u0087\u00a0b\u00ee\u0088\u00ff+\u00f5P\f\u0001c\u0005O\u001cQ\u0014\u0097\u00c9{\u00e0\u0013\u0094\u00a6\u00e2Y\u0016\u0014\u00c5\u00ab\u00df\u007f\u00ab\u0087\u001a\u0010y\u00d1\u0094Z\u0005\u00ef\u0015\u008en\u00b0{\u00ae\u00c3T\u0091\u00de\u00a2\u00ce\u00b0\u00b5\u00cc\u0003[{\u00178\u00c9\ru?\u00a5\u00fb\u00d5/\u00d7\u00ba\u00d8q\u007fA\u00e0\u00d6\u00caH\u000e\u00a1\u00a1\u00b3\u00b6j\u00e6\u0016\u00devUa\u00e69\u00b0\u00d9\u0092\u00c4 Z%\u00cc\u0003d\u00b9\u00c5\u00b9S\u00ad\u00c0\u00ac\u00c8p5\u00c2\u00f7?dQ\u008a\\\u00ec\u009d\u00e1\u00f5p.\u0085\u00e0\u0000\u00caTL\'\u00a1\u0098K\"$!\u0018\u00c6L\u00e4\u00a1\u00afr:\u00eb]\u001e\u00ad^\u00ed\u00c4u^\u001auq\u0012\u00fa0\u00ec\u00fa\u00ad\u0014\u00dc\u00fd9\u00b8R\u00f9{\u00b1\u00a0\u00e1\u0083/)\u0014eV\u0013\u001e\u00d58\u00a4{N\u0013\u0091\u00c2\u0019\u00b7F\u009c\u00c4\u00e4{\u00a8i>\u0011\t\u0013\u0013e\u00f1BX-\u00a6l\u00cb\u00d5\u0010Z\u00e1v\u00a7\u0013\u0001dq\u0017\u00f7LPAp\u00c4E4rXC\u00dd\u00c0mA\u00c0+\u00bc=\\\u00af\u0018Q\u008c\u00f6/o\u00d6zt\u0004\u00fdw>Y\u00d0\u008cy5o\u00a8\u00b9\u00f1H\u0004\u0001\u00d0\u009aY\u00c5\u000ekX\n\u00e8\u00d5\u008f\u00c9\u0093\u00a2\u0016\u00f7$\u00c6;\u00a7\u0095\u00c3\u0087\u00f0\u0091\u00adj.\u00d4\u00f1\u009d\u00145\u0091\u00b4\u00c6\u000b\u0011\u00a5\u00c9Ltj\u00b7s\u00a8\u00b8\u00fb\u0016!\u00b2/r\u00d5\u0017r\u001am\u0089l\u00ecH;\u00a8eNu\t\u00cb,\u0099\u00cd\u00cf\u00f4np[\u0093\u00bc\u00ad\u0086\u00cav\u00dd\u00e6T\u00b4C(z.Ah5\u0082\u0091\u009c\u00f6\u009d\u0080\u00ae\u00d6\u008e?E#c6--\u00ef2\u00bb\u0005k6\u00e7<\u00d4\u00e9<\u0017]q0T\u001b\u0007\b$\u00ef\u00cb\u00cbc\u00a1\u00c8\u008c\u0004i\u00ac\u00ef\u00cc\u00d8\u0097\u00c8\u00b0\u00b3\u00c5\u00e4\u00bb\u009b&\u0093[x\u0098\u0091:I\u0093\u0092\u00bd\u00fd\u00e0\u0016\u000f\u00bbQ\\?\u009f\u00ab\u00b9\u000e\u00bfV\u001fx\u00fd\u0084\u00c0\u00a6f XM5\u0098\u0090G\u008e\u00cbj \u00da\u00dbN\u00d5\u00cd?\u00eb\u008c\u008e\u00db\u0083c\u0007\u00ed%\u00a9\u00ac\u00b4\u00caW\u00ccH\u00d8F\u0094\u0001R\u0085\u00d2f\u00b48\u00d7o#\u00fa\u00ab\u009b\u00e5\u009d\u00c2\u0099W\u00e3G\f(\u001aW\u0087@\u007f\u0081qY\u0003B\u00076\u0017\u0094&\u00f3\u00e0\u00e6\u007f(\u00bd\u0019\u00b7+\u0004$\u0096^\u00ee\u00b6\u00d9R\u00b6#F\u00c3[\u00a1\u0098\u00f1\u00fb\u0003|\u00fd\u00b1\u00aa\u0013\u009f2\u000b^\u00ff\u00bay\u00c6\u00f3\u009a\u0088\u00c7W\"W\u00cc\b%vL_\u00df\u00eb\u00ed\u00f9r\u008fJ\u00a4\u009d\u0005\u0090i*m,Hx\u00ac\u00e4\u00a7\u00d7\u00fa\u0011\u00e6\u0012w\u00935\f\u0080g\u0083I^\u0080\u008a\u00c8b\u00f3S\u00d1\u00fa\u00c2\u00b6\'~\u00e2\u00cf\u00a1\u008d\u001a#\u00bb:?JT\u00eb\u009e\u0011q$*\u0082\u00a0\u00c04\u0094\u0083\u0010\u009f\u00f2\u008d\u009f\u00cc\u00cb\u00ca\u00bc{\u007fm\u00a9\u00d2\u00be\u009e\u00ff\u00bb\u00f1W\u009e\u00ae\u00cf\u00b7\u00b0\u0095\u0017\u00a7\u0093^\u00f9\u009c\u008a!\u00e0\u000e\u00a6a\"\u00b4\u008a\u00c7\u0092\u00b5\u008cC\u00a5\u008dc\u008cn\u0084\u00e3\u0006\u00c4\u00b9\u00f5\u00abh\u00b5\u00ed\u0094G\u0080\u00e0\u008cJ\u00bfJ*{\u009f\u00a4b\u00856CR\u0003\u009c\u0017\u001cQ6\u0015\u00acw\u0082;k\u0005\u00fd\u00bbByU\u00f8\u00c6\u009d\u008c\u00bd\u0083\u0015Q\u00a8KK~\u0087b\u0084\u00bb\u00c4=]\u00f1\u00fb<(!\u0080\u00adm\u00c6\u00f1_K\u00fc\u00c4\u00a7\u00a7\u00ab\u00a5\u000b\u009c\u00f5A\u00aaA\n\t\u00a5\u009f\u0080,\u00f8\u00a4pw\u00d5G\u001b\u00a4g\u0097\u000b\u001d\u00ea\u00a4Im\u0014\u00ca\u0089\u001d\u0088ID]2f\rpS6t\u0084\u009f\u00fd\u00fe\u0002\u009bW\u00f9\u00dc\u00d0\u00f5\u000b\u00e3\u008b\u008b\u0003\u00f6\u00a9\u00d7.\u00c7\u00a4\u00b3\u0019\n\u00a9Ofxf\u0004\\\u0084\u00a7c\u0098gG\u00cew\b\u00f2|D\u00ea\u00f9.\u0015\u00d9_\u000e\u00c0\\\u00fa\u00ca\u00d6d\u001d_E\u00c3;`\u00ff\u00ae\u00c0\u00acdTWT\u00c6_\u0019*_\u00a9\u0089\u0080\u0088\"\u00be\u00b4\u0087O\u0000\u008e.\u001d3\u00c2\u00f7\u00cb\u00b7\u00d0\u00e8U\u00bb+\u00eb)J\u0006z\u00f4\u00a8\u0094\u0085\u00a2x\u00de\u00aey\u000e\u00d7\u0007\u00f18\u00ef\u00c9\u001f%\u00a6f~S\u00e6\u00a2\u00da\u00ad\u00ad\u00a6\u0093r\u001b\u0085\u0096\u00da\u00ed\u00a1\u0082fM\u0012\u00af\u0012\u00a6\u009e\u00a7GbC\u00c9\u00da2\u00c1\n\u00ab\u00fc\u00fa\u009c\u00dcT[x\u00e3\u0083\u00db\u0085\u00dd\u0010\u0012\u00af\u008c\u00c8\u00a6=\u00c6\u00f56\u009cR\u00a4\r@\u00af\u00c8\u00d4J\u00f41\u00b6*\u00f0\u00db\u00be\u009d\u00eb\u00f5/\u0086\u00db\u000fG\u00bd!\u0019\u00a8@\u00a1]\u0080\u008e<0\u00a7]\\\u00fd\u008b_\u00f2EJ*\u00e8\u00b6\u00e7\u00a3\u00a8\u00e8H\u00c6d\u00c0\u00caIu\u00ca\u00c4m\u00dd|@\u000f1\u00e6\u00b8\u00b4\u0084\u00d6\"\u00f2\u00df\u00ba\fyT\u0093\u0010\u00c42\t\u0080$\u00bf\u00c99\u00c2G\u00a6\u00fd|F\u00d6#\u00e1\u0006d\u00811c\u00cb\u0086\u009f\u00c4\u00d3g\u0001S\u00bf$\u00df\u00d3\u0096\u00cdG\u009c\u00af\u00a7\u0095\u00c6D\u00c6\u008f\t\u00dd\u009e\u00d2\u00f7\u008b4\u00d2)\u0005[\f\u00cc\u00d6\u0084\u00d1\u00dd\u00e5\u009aI\u00de0\u00fd\u0014\u00ael\u00eeJ\u00d1.\u00e2\u000f\f\u0091f\u00a2.\u00bb\u00a0\u00f6u]7 \u000b*\u00fa\u00e3\u00c5\u00ba\u0018\u00e6\u0094\u009fx\u00fe\u00ad\u00f7p\u0002\u00e3\u0011x\u0086LJ\u00e7s\u00a7?\u00bc\u00c8u\u009d\u0089\u00f05\u00c0\u00ef\"\u000e\u00fej\u0011\u00a0\u00037\u00a58_\u00c0\u00e5=\u007f\u00ef\u00ef\u00bc\u0018SA\u00e5d\u0095@0\u0089\u00a3\u00c7\u00d1NB&\u00f9eB\u00c9\u00a7\u00fb@`\u001b\u00d7\u00b9\u00f1\u00bc\u00c4\u00fb\u00fd)Q\u00b7\u00e6\u0002\u00ca\u000fBk\u0019\u0081\u00e4^\u00df)/c\u00ddH\u00a2q4S\u000b\u0080O\u0087\u00ba\u00ebOq\u00e0\u00aa\u00b5\u00a1$\u0088_\tQ\u00bf\u0087\u00b2X\u00e9/\u00d1\u00cc\u00de\u00ba\u00f2\r$\u00f7(\u00c0\u0083\b\u0016\u008e\u00c6#S\u0004\f\u00ba\u00d05\u00ae\u0090a\\K\u008f\u00ed\u0090\u00a2Xy\u00ca\u0015;\u00aeV\u000e\u001a\u00cd\u00de\u00a3\u00aat\u0083\u00b4\u00df\u0099<\u00c9vso_%L(\u0092w\u00de\b\u00daT\u0089\u00d2\u00f4\u00fc\u00d6\u00ff\u0094\u00eb\u00a4\u00ea\u00a8X\u009a\u00f27\u00db9\u00fa\u0000\u00a8wa\u009aV\u0096\u00cd\u00f3W\u0092\u00a8\u0000\u00d0+D\u0015\u00bc\u00f3\u00d5\u00a3\u0087|\u00d3]P(\u00d2\u00cd\u00cd\u00e8\u00f0\u00f6h\\\f\u00a6\u00872\u00ceT\"\u001aJ\r\u00c8\u00d9\u00ca\u00ef\f\u00cdRE&D\u00ff\u00ba{\u008b\u0086\u0086\u0083!\u00b0\u0099\u00f3\u001b\u0090\u009e?\u00b5Pk\u00f0\u00da\u00e4\u00e6\u007fp$N^\u00c4\u00ce\u00c3\u00d7\u00dd\u00be\u00f1\u008e\u000f\u008d\u00d92\u00dc\u00c7\u0089\u0018\u009d\u00f5\u00cd\u00cd\"\u00de\'\u0007\u00fd\u00e35>:\u00ac\u0091\u00f1\u00fa\u00f0\u00dc\'\u008f\u0090\u00db#`\u00a0\u001e\u00cf\u008e\u00cb\'\u00ca3qc\u0016\u009cS\u00c7(\u00a0)7pz\u0016$%\u00cb\u00f0\u0099F\u0091\u00c7RS\u00f7\u00b3K\u00fd\u00dd\u00ea&O\u00a9\u00ba\u00fc!nS\u0012\u009c&8\u00fc\u0080\u00ef\u00e8\u00cd\u00a8\u0010\u0019(\f4\u00fe\u00e9X\u00f6f_\u000e\u009aj$\u0091]\u00e7\u0080\u00c9\u00f7\u00e45\u00806\u0000\u009e\u0014\u00db&1\u000b\u00ac ]\u0080(\u00ec\u008a\u00a6\u00edX\u0000\u008dl\u00a8\u00c8\u0011\u00e6L\u00d4(\u00ea\u0098\u00c2\u00d7\u00ec\u00de\u00ee\u0016\u00ff\u00c0%2\u00eb\u00b77Cd\u0012\u0080\f\u000e\u00eb\u00d7\u00e4\u00c6\u000b\u00e2\u00fc\u00c6\u00f0\u00e2.t\u00db\\\u00d5\u00b1@\u0013\t\u001e0F-,\u00f4\u0007t#\u00bb]YP\u00e8\u0018\u008a\u008ev\u0014\u00db\u00ac\u0000w\u00eb\u00bc\u00ce}\u00f4Dn\u00a45s\u00d7K\u00e6X\u00f8\u00a7\u0080\u0081\u00dcI\u00f3\u00ff\u0093\u00c1D\t\u00ad|p\u00c4\u00cep\u0007;G\u00edBo\u0003\u00ac\"\u00aa\u0094\u00ac<\u00a7gAf9L6\u00053\u00a6\u0012\u00fd|7\u00e7\"\u008a\u00dd\u00c6\u00f4x^Vy\u00e8\u008e0\u00e4\u00d5\n\u00fd\u00f8/%9\u00ec\u00fb\u00cfz\u0098\u00ba\u00b0\u00b8\u00a7\u00176\u0005\u00a1\u00bbp\u00e8B\u009e\u001c\u007fL\u00e3\u00d4\u00a1\u00b7\u00da.\u009f\'\u00c3\u00d7\u009bA\u00e0\u0082L>\u00eej*\u00b1\u008d\u00bc%\u0011\u00c3#\u00e9\u00b4o\u00c0\u00ab\u0081\u00c7H\u00c7k\u00e9\u007f\'O\u009f\u00bb\u00a9\u0097|\u001c\u00a3\u00b2\u00f7e\u00bd\u008d\u00f5\u0016\u00f5p?\u0016\t{\u0014\u001c\u00a2C\u009d\u001f\u009e\'^\u0086\u0012\f^9\u00fe(\u000e\u0085\u0007\u0006\u00fb\u00a9\u00f0\u00c7e\u008f\u00c7\u0086\u0011\u0011\u000f&I\u008b\u00d8=\u00a5\u0097\u00ac\u00f7\u00b1\u00fe?\u008c\u00c0\u00c5\u00bc.IN\u00b2\u00bf\u00b8\u00c2i0\u00c4.\u00db\tt@\u00f5\u00c1j\u0005;\u00ec\u0096\u00e2K\u00ab\u00d6F\u00aag\u00be\u0090_M@|\u00ab\u0088\u0010\u00aa\'\u0094b\u00ef.R\u00a9\u00eeq\u00ab\u00d7\u00c2-\u00bd\u000e:`\u008b\u00a4\u0081\u00ea_fr\u0094\u00ea\u00e9*8\u00d4\u00fe)l\u0084\u00cb\u00f0MA\u00ad\u00d0\u00ce\u0095;\u0000\u0017d\u00b2\u009e\u0017Z\u00b1\u00f0\u00ff}\b\u00ab\u00b4\u00fc\u00c0\u008d=\fw\u0011\u00dc\u00b7L\u001a\u00af\u00b7yR\u00995*[+\u00f6v\u00bf\u0004\'/\f\u00d6\u00100\u00ebF\u00c3\b\u00c6\u00f8\u00b8\u00c1\u00eeKn\u00c8\u00c6\u00136Qu\u00a4.\u00a3F\u00c5H\u0093\u0086EwG\u00cf\u001d\u000e\u00eb\u001a%\u00f6(\u0017\u00ab,\u00a7\u0098\u00c8y<\u00d1c$\u00a7\u00af\u00e1\u00a2\u00e8\u0012\u00f4\t\u00ab\u00d8\u000e3o\u00bf\u00daQ\u00dbr\u00ab\u00e1\u00a2\u00e9\u00a58-3W?\u007f\u00b6\u009b*\u00fcV\u008e\u00fa6\u0016\u00aa\u001e\u009a\u00f06\u00f7;,A?\u0096c\u0080\u00f9+/3O\u001e\u0012\u00e4c\u00ce\u001868Z\u00178`\u00dfo\t\u00c6v\u00eb.&1+XI\u00d4\u00b5sSa\u00a4\u00f1\u00bf\u0018\u000b\u00e8o\u0081G\u00a3\u00a5\u00db\u00f3\u0014d6\u00d7^\u00f56\u0003\u00f4R\u0015\u00c6\u00d8\u00ce\u00e6\u0080\u00ee\u009c\u0097[\tYy\u00abG\u0019\u008e@8\u00f9\u00b4F\'U\u00e0\u0017;w\u008c\u00e0{v1\u00e7\u00d9\u00e4\u0004f{\u00f9F2\u00ce)\u00be\u00dc\u00dc\u0095>\u00a3/\u00cfUU\u00ce\u00d0\u0004\u008d<Qh\u00ab\u00ff\u0085 \u0080\u00bfz\u00d9\u0095\u00e2[\u0099\u0092B\u00a5\u00cfiCv\u00a4&)[\u0015\u00ea\u0010\u00f7\u00ceU\u00e8\u00e2\u00af2\u00df\u00bf\u0091c\u00efb\u00e9\u0016\\\u00c0\u0090\u0013\u00fb\u00de\u00b7\u00fbP\u00a5P\u00fd\u00b2\u0013\u00e7rL\u00e2\u00da\u007f@L\u0092\u00c7Vc\u0087[\u00c5\u00b7>\u00e6R\u00ecGs\u00f6;J\u00eb\u00c0\u00e4\u00c1\u00bbL\u00f6\u009f*\u00b6\u00b8\u00f6\u00e9n\u0093 ?\u00c1+\u009b\u00fbS%\u00e1MB\f\u00dbf\u00c6$4\u0090\u009cg\f3\u0080\u00f9F\u00d53\u0001\u00bf(\u0019\u0003|\u009b\u00c4\u001c\u00b3\u00a6c\u0096\u00a7\u0012%\u00cfc\u00c4\u00acD\u00fdh\u00d3\u00f8M\u00c7t\f\u00f5r\u00fc\u00a2\u00a4\u0012\u00e3]C\u00db\u00f3#\u00bePB\u00bc\u00c0\u00e0\u00feo\u008e\u0088\u0016\u00b7t\u00b5\u008b2J\u00b7\u007fH\u00c3\u0089\u00a5\u0013\u00ba_\u00847\u009e|i\t\u00e8v\u00c5\u00fa\u009d\u008b\u00ea%^/\u00ff\u00c6\u0004\u00f5\u009fJ\u00d6\u00ebR\u00bf<u\u00ec;\u00f8\u00dc\u0011\'\u0086\u001b\u00d82\u00cb\u00d6\"5\u009d\u008bX\u0099y\u00ee\u00b4\u009f\u0080\u00d5\u00dc\u00e8u\u00ae\u0013b\u00e7>\u00e5\u0087I\u00c5\u00e22\u00ab\u00c5\u0088\u00b2!V\u0001\u0001\u000bM\u00c7\u00bb\u00a0>\u0085\u0091\u00d5\u00fcl\u0093\u00b7\u00ea\t\u0096\\z\u00f8\u00a9\u00fd\u00aa\u00a4\u00ee\u0092k\u00d42o\u00ae[\u00ac\u00e5\u00c8\u00a4\u008d\u00bdE\u00ceF\'N\u00fa-\u00d8XL\u00e1[\u00b45\u0091\u0018u\f\u00f3X\u0005\u0092\u001f/@\u0099\u00b4\u00f3\u00d8\u00b3c\r\u0095\u00f6\u007f\u00e1\u0007\u0005\u0002\u000f*\u00f79\u0083\u00e3|\u0011\u00fc\u0006\u00ab\n\u00ac\u00da\u00f7\u00b8\u00f5\u00b5z\u0015\u00ac\u00e9\u0095\u0010\u00f0\u00c8\u00c1\u00d0/Q\u00f4\u00e5,\u00b1]x\u0003b\u00fd\u00b2\u00f2\u00e9q\u0092hpn^\u0015\u00cc<\u00f8bf\u00e1\u0083\u00cap\u0096\u00e3f\u00b6Q\u00dd\u00e5w\u00can\u00e6\u00f7\u0087=\u0011\u00a7I\u00b8e\u00ac\u00e4\u00beA\u00df\u008fMBpN[\u0087\u00e3 \u00af\u00d7\u0001\u00c1\u00ebeWC\u0011c_0t\u00fb+f\u00e1\u00f2\u008f\tL\u00a8\u00a9\u00c4\u00b7\u009cdz\u00e5@`\u00d9B\u0090\u00060U\u009a\u000b\u00cbX\u00c1\u00e6\u00d5z\u0002\u00c5\u00ad\u00df~*\u0002\u0089\r\u00c2\u00cdh\u00fc\u00a5\u00ba\u0011s\u000b\u00fa{\u008b\u00d5\u00b2\r\u00bc\u00b1\u00b6*@\u0087\u00e9q A\u00c5\\\u00ec/\u001c\u00a2fPuR\u008f-\u008e\u00d1dFLL\u00ca\u00d0\u0096\u00a3\u0096\u00d0p\u00f7\u0098\u0015\u001c\u00c0S\u009fM\u0014\u0014\u00b3\u00e3\u00d8hth?Oo\u001ao\u000f\u00dcc\u0004\u00df62G\u0003N\\q~\u00e9V\u0094\u00d2\u00d9\u00bbF\u00f4\u0094=@\u009c\u00f4zM\u0086\u00fdEU>\u008f\u00ba\f_\u0087\u00e4b4\u00e4*\u00e3\u00b9\u00a4\u0089\f\u009eKX\u00e5\n\u000b\u00f0Mn\u0098\u00b6@\u0017q\u00db\u00be=t:\u00b1\u00c8b\u00c3:*\u008c6\u00a9Fk\u00d5\u0099\u00f72\u00e7\u0014\\\u00e5%\u00b4\u00ba\u00bf\u00abA\u0018.V\u00e1\u00a7\u00b1\u0099eN;\u0088*\u00f0_sM\u00008\u0085\f$\u00c0qY\u00af\u00ebW\u0016O\u00b5\u008bx3[\u00aa\u0006\u00d3\u000f1\f\u0016\u008a2\u00ea\u0013|M\u00c2d\u00b1Z\u00d4!O\u00b0\u0014l\u00e3>\u0007\u00f8<\u0084\u0006[\u00ae\u00b7\u0011X\u00e8\u00a9\u00c1d\u00d6\u00d3i\u00d5U =\u00d2\u0004\u00b7\u00f8\u00a4%\u00a6\u00bb\u00ab\u00d31\u00d9\u0081\u00cc\u00df\u00e5M\u0085\u00c3\u00fe:\u00e8\u0013\u00a0+3\u001c\u00b6\u009d\u0007\u00a58\u00e9M\u0013/\u0002[\u00d6P\u00f3\u00d2p\u00c4/\u0013j\"U\u00b9\u0092\u00c6\'0\u00e2\u000f\u0097\u00a0\u0017~(\u001c\u00ef\u000ed\fK\u00bbpW\u00a4\u009f%\u0019\u00f4\u00dbF(\u00a3\u0002\u00f1\u00ca\u008cAXMN\u000b\u00f8\u00d7\u00a0\u0094\u00f0Pi\u00b7\r\u001cHl#]S\u00b7\r\u00ad&I\u00f8\u00fa\'{\u00ac\u00cdzr\u008f\u0084\u0098\u00f3\u00a0\u00fd\u0003\u0013W\u00ceV.9\u00b5rS\u00c6\u00bf2).:\u0017odv\u00ea\u009a\u00db\u009e_\u00c2\u00b0\u0002\u00b6V1\u00c4b\u0088\u000b]]\u00f0P\u00f8\u0083\u00ab\u00d9 i\u0082+\u0096\u00a1G\u0006\u00ea\u00ad@\u0098\u00e7\u00d9\u00b1xW\u00e3A\u00d1n<\u00b6\'\u0011\u0092\u001d\u00e5\u0086%q_U\u00e8\u008fkj\u0005\u009d\'\u0019C\u00cd\u008ce\u00a5x\u00ce\u00da\u0091\u008c\u00cd>\u00bfb\u0093\u00f3\u008c\u00bf\u00da\u009b\u00ee*x^\u0001\u00d9_\u0086~\u0096\u00c9\u0093\u0011\u001b\u0013\u00fa\u00a9\u00158TG\u00ae.\u00d0:\u00b7\u001e\u0019\u00f8\u00aa\u000e6*`H\u00f2$\u00e6\u00fdaB\r\u0097\u00bcZi\u0017\r$U\u00e6\u0096\u00da\u008d\u00b7\u00dcQ\u00b6\u00dc\u00c47\u0085\u001d\u00c9\u00fbG\u00cb0=\u00bc\u00e2=\u0082:F\u0010\u00cc\u009dN\u00a6c=\u00dcW\u0098\u00cd\u00cd\u00deb=4\u00eb\u0080q\u00aa\u00f0U!\u00f7\u00da@#\u00a8s\u00d61\u00fe%\u00d5o4\u00e5\u0096w\u00bd\u00fd\u00cb(\u00d1,\u00a0\u0017<\u00cb\u0005\u00ca\u00b7\u00b6D\u00c3\u00c8\u00b9P)\u00e1r\u00a7\u00ae8\u00dc;\u00ee^04#\u00ab\u00ab(>f\u00f0b\u00a5\u00bf\u00e3\u009b\u0099\u0088\u00de\u0010\u00d5\u009f\u0089\u0010eC\u00d8\u0000\u00b1\u009fQx\u00e9\u0092\u00b8y\u009c\u00cc<\u00a4n#\u0091&\u0092\u0093\u00f5p\u0016\u0094\u00b4\u00b0C\u0085\u0010\u0098~\u0083Dfoi\u0005^\u00ba1\u00bdr\u00b3\u00e9\u0086\')2\u00fd\u00cc\u001a\u009dx<\u00d5\u0007\u00ef\u0018X\u00c6\u00bd\u0091uYB\u0017\u0011\u00b4\u00be~\u00f2h\"&\u00d1\u00a8\u0081\u00afL]d\u0084e\u001b\u0006z\u0013K\u0014\u00d5\u0014no\u00f2&4\u00ebC\u00c6U\u00a1\u00d5`\u00b9\u00c7L\u0097\u00e3\u00c4N\u00f5\u0005\u00d7\u00f2n\u00a7A)\u00a0!\u00e3\u0085\'\u001c\u00c7\u00e7\u0096\u0019\u00a8\u00bd\u00a2\u00af\u0007>\u0006E*\u001fe\u00a4\u00d8\u008e^\u008bT\u0003\u00few\u00b7\u0093\u00ec\u00c5S\u009d,\u00ba\u009fUy/\u00a4\u0098\u00d3\u0001\u0084$`g\u00d7\u00beR.\u00e7\u00c48\u00a2\u00b2\u00007[7\u008e\u00b9\u00a4\u008e\n\u0082\u008d\u0012\u008e\u0082{]F\u00a4\u00b2\u00b4\u0006\u0095\"\u001a\u00a8\u001e\u00b8D\u00bb\u0005\u000f\u0006J2\u00fa\"\u00d2\u00e8\u0019\u0080%l \u00a2\u00a3\u00e7D\u00e9\u009f\u00d4\u001d1.\t\u00d3}\u00c7\u0089/MK\u00f5Y\u00deX)\u00c9:\u00c6\u00e7\u00bad{\u00ce\u0097\u00f3\u00d9\u00b5\u00ab[f\u00b8RP=\u00ca\u00b5\u0095\u0096\u00a8\u00a7 S\u00c2\u00dd\u00f6\\\u00b8<b^I\u00b2\u00e6\u00e8%\u00cd\u00a2\u00c9Y\u00e5\u00d8\u00be\u00b5_\u000f\u00f4g\u00b1\u0089\u00d8\u009c\u00de\u00b2\u009e\u000e\u00de\u00ca-\u00ad\u00c0\u00d9p\u00f2\u00a7A\u008f5\u00e1\u00b3\u00a2\u00f3\u00b2\u00d2\u0019\u0085\u008e\u00be\u00c1\u009d\u00fe\u00f4eIb\u00b7\u001e\u00c5\u00f1\u0097\u00d4\u00e4\u00e1v\u001en\u00ac\u00f3\u001b\u00d7\u0096\u001b\u000e\u00dfm\u00eb\u0015\u00d4!\u00e1\u0098r\u0005\u0081\u008ct\u00d0\u00ea \u00fadD_\u00bf=Q\u00b9\u00e4\u00c8p\u00e2\u008c\u0011\u00ddC\r^\u0001\u00d3\u00a5\u0011\u00cb\u0087#\u001d\u00db\u0089\u00d4\u00b1%\u00d3\u00ca\n\u00b3\\\u00a0\u00a9k\u00ac,yaS3tI\u00af\u008d\u00a9\u00e4D\u0010?t\u009a}\u008f\\\u0095\u0098w\u00dc\u00c1\u00bd\u00f5\u00fb\u0094\u0005\u0018\u00d1\u00f0\u0086\u00d9\u00f2;u\u00db\u00ca\u00d1\u00e7p:\u00e6\u00cd\u00ae\u0003y\u0017b\u0011\u0003\u00d9\u0014m\u00a3*\u00a1\u000bo\u00a7\u00be\u00b8\u007fp\u00bf\u009ega1\u00d4\u00b4\u00aa\u00a4\u00ffz\u00101\u0098V\u00e2\u007fx\u00f7~\u00ab\u00c3#\u001d\t:\u0097/\u00f0\u0006R u\f\u000e\u00bd`i\u008f\u00c2\u00ff</:\u001c\u00c7\u0095\u00ad\u009a\u00983\u0017\u00e8\u00db\u00fc7\'8M\u00ff@\u00e9^\u001b{s\u0098\u007fe\u00b9\t\u000f\u00ad`\u00c0\u00d1mT\u00c5\u00f2g\u00d4t\u001ek\u00a2\u0004\u001af\u00ef\u00f0\u0088X\u00d5\u001bt\u00d3\u0007<\u0002\u00bbT\u00a7\u00bb#\u00c1\u0005Y\u00f5\u00a0P\u009e\u00a5\n\u00ec2\u00d3\u009f\u0096\u00cbz\u00ca<\u00b3\u0012\u0083\u000e!a\u00ee\u00ecc\u00a6}\u00d6\u00d2\u00a1\u00c8\u0082l\u00ffW~#k\u0085E\u00c2\u00e9\b\u00e4\u00a00\u00e6\u00bf\u00d9Gg\u00d6\u00ff\u00cf?\u001d\u0094\u00d9\u0013\"\u0099\u00e1I_\u00b2\u00f2\u00d10xH*\u00c7\u00a2b\u00a4\u00b3%\u009f\u00aa\u0000\u00cf\u00e8\"B\u00e9\u0082\u0089\u00db\u00a0\u00fd\u0093\u0011*v~^\"m\u00af\u00ef{\u00b2u\t\u001b\u00c7\t\u00ee\u0085KL\u00dc\u0080\u00c2h\u00e8y\"g\u00bd\u009a\u0090\u00af\u001e\u00ceS1B\u0014h/\u00af+:\u00c1\u00b8\u00e5\u00f0\u00b4\u00ad\u00fa\u00bb\u00ba\u0098\u0098\u0093\u00e5\u00c7\u00e8$\u0095\'\u00c6\u00a1\t]\u0097\u0004\u0087,\u00a8\u00cc\u00bd\u00e5G\u0018S\u00f9\u0094\u00a3z\u001b\u00b6\u00efo+\u00c7\u00cb\u0091e\u008d\u00eb\u0016cm\u00f1zD\u00c0\u000f\u0000k\u00fb\u00075Y\u00d5x\u00b5\u00dc\u00f5\u00cd\u00d0\u00ba\u00d0P\u00b28\b\u0092\f\u00f9\u0081\u00ed\u00df\f\u00e4\u00e6z\u0019G\u000b\u0012H\u00ae$hC\u00fe\u001f\u00d2`\u00df\u00dao\u009d\u00b4\u0083\u00bb>\u0084\u008ce\u0019\u00dem\u008aSD\u00e1\u001e\u0083N\u00d4\u00f8<>\u00d6S*\u00d4\u00d5b\u0094\u00f4\u00a4\u00cd\u00f3\u0090\u00b0E\u0083\u0084\u00d9\u00e2l$=\u0097\u0097Nt2\u00c0\u00ba\u007f\'$\u00ac\u000b\u0093\u0007w \u001cG\u00ce\u008a\u00f5\u0087G\u00b4\u0002,\u00ef\u00ca<\u00df@\u0010\u00b1\u00d0\r\u00ec\u00e8\u0004\u0096n\u00e6\u00e5\u00f8q\u008b0\u0015\u00cc1\u00d0%\u001b/\u009c_\u00bc\u007f\f\u00de\u00e4\u00db\u00e2\u00ab\u00d5~R\u009a\u00c0\u00a1x\u00af\u0013\u009a\u000b\u00eb\u0081\u00cf\u0086V\u00be\u008fl_\u00df\u000e\u00b1v\u00d3\u00f1\u00ad\u00bf\u008c\u0083)9\u00a4vc\u0098YSb\u00fc\u00e61\u00d2\u00b3\u0083=h\u009d\u0093p\u00aa\u0018\u00bfH\u00ab\u00b3\u00d9e\t\u008a\u0001\u00fes\u00f9\u00b4I$\u00e4\u00ba\u0002\u00efA\u00fe<1\u00d0\u000fS\u00ed\u00b6\u0092\u00b0v\u0014\u008e\u00f2\u00e1\u00bci\u00dcx\u0083\nA\u00d3\u00c1\u00dfDX\u00f0\u0081\u00d7#q\u00e5.R\u00d1\u0089@\u00de[gl2$%\u0092\u0090\u00ab,\u00d5U\u0016\u00df\u0085\u0002\u00d68KsS\u00caLoV\u0007H\u00ffd\"*\u00fe\u001e%ig\u0080\u00a4\u00861\u0080\u0016\u00b6\u00da:\u00db\u00de1:\"\u00d1\u0089\u0006f\u00f4l\u00f7b\u00ab\u00886\u00cb3\r6#\u00c8\u0089\u0010OK:\u00a0\u0013\u00a7\u00a9\u00ea[\u00c5\u00e8\u0012\u0083`\u008a\u00d8\u00ff[8@\u00ce\u0015\u009b!\u00ac\u00af\u0014\u00aa\u0019~P\u001e\u0085\u0018\u00ba\u00c8\u00a2S\u00941e#`\u00b7x&Z\u008d\u0084}\u00fcj\u0088\u00c4\u00924\u009a\u0017{\\\u000f\u0017,\u000bVTc\u0005\u00db\u000e\u0015@\u008aN\u00e8\u00df\u001a\u000f:2\u0088\\\u0014\u00a5T\u0006\u00b5\u00fd\u00ff:\\z\u009dDB`4bu2_\u00ec\u00f7\u001d\u0083\u0082\u00d1q\u00d7\u00e5\u0002 \u00ea\'_\u0083\u00e0\u00f0\u00f4\u00b4\u00cd\u001c\u009f\u00cd\u00f0\u00b0\u008d\u00dfGJ\u0011q\u00be7\u00be]\u000bRZp\u00c7\u00f8\u00bd/i~1\u00a4\u00c6\u00bc\u0091\u00ae\u00e7\u001aZd!\u009d\u0085\u0001\u00d6\u00bci*\u00be\u00da;sy\u0096\u001f\u008d\u00a3\u00d4\u000b\u00a0\u008dRj!\u00beTF\u00a1\u0082\u00ba\u00f8,Z\u00cb\u00e5`R\u00e5b\u0001\u001a)\u00d9\f\u0093J\u009b\u00d9\u00b8y\u00de0o\u00d87=\u0083\u0083V=\u000f\u00c5\u00a3\u00ddD,\u0007\u009az\u00a3\u000e_\'\u009a\u001f\u0002 \u00ee\u0018\u0016p\u00a4\u0014\u00de\u00de\u0018\u00ef\u00d0\u00e2Q\u001e\u0092\u0015\u0004r\u00cdE\u00d7H\u001f&\u0092\u0092\u00e6\u00e9\u00e5\u00e6Y\u00b8\u00d9\u00be+\u00e3\u0099V\u00e8c\u0097\u009f\u00f7l\u0005\u0094\u00ca\u0096O\u00e0)\u0007\u00d1\u0012r\u001en\u00f3z\u0014\f\u00c3\u00d0P\t\u0010;\u00fe\u00fb\u00d9r\u009f\u0097\u00b4\u0089iT;\u00b3b<\u0004\u0004\u00d5\u0013\u00f3]\u009eP@>|\u00ca*\u0089\u0001\u00ed|\u00d5\u00a6-qb\u0086oK\u00c4e7\u0012\u0098\u00f3\u001d\u000e\u00ce;`B\u0092\u00f0J\u00aa\u0016m\u00f2\u00c13\u008f\u00a1l\u00d0\u007f\u00b9s\u00ea\u00fa\u0080\u00ac\u00c2\u00f4\u00e9\u00f0\u00f0@\u00a7\u008d\u00aewd\u00e7?\u00a1\u00ce\u00fa,u0lW/+^?\u00a9C\u00f4C@A^+#\u008e\u00dbX\r\u00da\u00f797\u0097\u00af\u0015\u00d9|\u00ee\u00f2\u001a\u00b4\u008b)\u0001+y\u000b\u0019\u0082\u00da \u00d3\u00e1n\u00ab\u0010\b\u00d1b>\u00a2\u00f7\t(p\u00b7<I\u00c3\u00fe+\u00fdK\u00efo\u00d2\u008b2\u00ab\u00fd\u00c7>H\u0017\tQ\u00a96l\u0086\u00b3\u009d\u00ab\u00fb\u00b7\u00c8[l\u00bc?\u00d9\u0005l\u00e5Z\u0003\u00f7\u0092\u009eq\u0081\u00a4\u0087\u00ac\u00e7`0\u00ec\u00bb\u00e0\u00a8\u009a\u00f5\u00a4\u00f6\u0092\u00b8\u000e\u00f7\u009e\u00d3J\u008fH\u00a7@J\u00ad#\rC\u00b9R\u0080q\u00ac\r\u00e5\rJ_N\u00d0\u00c2\u0013\u00c6\u00a1\u0005\u0098^*0\u00c0\n\u0081n2\u008c\u00d4\\\u00feav\u00d5f\u00ab\u008d-\u00e4\u00fe\u009djs\u0005\u008eaS\u00abk\u00b8\u0017Ch\u00d0{\u0093\u0016\u00d3\u00d1\'\u00bb\u00d5j\u00ab\u00e5\u0092\u00c2~\u00e6:\rMF\u00b9\u00ef\u00c9G\"\u00af\u00f7q\u00d2\u00a7\u0082\u00d9P\u00e2\u00ed\u00e0\u00c6>\u001ds.\u00dav\u00f7\u00f3\t\u00b26\u008c\u00b7B\u0096\u00b4b\u00c9]\u00fa\u0012\u00fe\u00a1\u00a8\u00ca\u00ec\u00ba\u000e\u00d68\u00d8&\u00b7O&\u0083\u001bg\u00cap|\u0090&k\u00e4r\u000f\'\u00abx\u001e(\u00d5\u0005hm\u00d3\u0087\u008b\u00f0\u00c3\u00e6\u00e7\u00ec\b\u0093\u00ae\u00d8\u00b7\u00a5\u00b4\u00bb\u0097\u00b1\u008af[V\u009b\u0098s\u008b\u00e4\u00a7\u001at\u001c\u00a8\u0087\u0084\u0087{%\u0095U\u0015\u009a@\u00ef\u00bba|\u00b1\u0084\u00d5\u00c11f\u00d2\u00e6\rS\u00f3\u00ad\u00d0\u0092q\u008b\u009a\u00ee\u001ey\u00e5vp\u0006\u0087o\u0000\u00a7 \u0014\u00f2\u00c1R\u00cb\u0012\u00da\u00bb\u0089\u00c6\u0089E\u009bk_\u00b6\u0003P\u0012\u00a0b\'s`\u00ac\u00f6\u00b1\u00a1\u00cf\u0084\u00efx\u00a9}q\u00a3/\u000f\u00e9\u00f2`\u0080\u00e9b\u0086\u00e4\u0080\u00b5\u00e2\u00dc\u0085]y\u00ccN\u008b<6vr->\u00f0\u00ca\u00db\u00ed\n\u008b\u00c3\u0096\u00995\u00f6\u00d0#\u0096\u00f3\u00b2\u0003\u00f1+\u0083C\u00c1\u0085\u00f6\u00ddj\u00ff\u001b\u00e8G\u001f\u001dl\u0081\u0017\u00ba\'\u001d\u00ee\u00beUd9\u00fa\u00d4\u0010.6Y\u00f8*\u00e5.\u00fa\u0081\u00d2[\u00d7\u0086\u00b6\u00bc\u0011A\u007f;\u0091y+\u00d6s\u00cc\u00d4\u00d3\u00de(P\u007f\u0080\u00b9\\\u00feS+\u0093X\u00b9\u00a5;\u00b22+\u00da\u00cda\u00f9\u00c3\u00e5\u00c5*\u00ac\'o\u008fa\u00a6\u00fdd\u00fc\u00d6\u00b0\u00b1g\u00bc\u00bf\u001a\u001a\u001d\u00a0@\u0081\u0001\u00d2\u00b57C\u00c5)Y#\u0000\u00eb\u00af\u0081\u0000p\u00d1j\u00a4\u0091\u0083\\\u00bafl\u0011\u008b\u00a6\u00deGzW\u000f\u0000\u00c8\u0015]Q\u00f7=\u00df\u00d8\u00df]\u00a7-`\u009a@\u00f0S\tl\u00e6U\u0088!O\u00a3HP\u00a4\u009c\u0080x\u00a1g\u00b66\u0019d(\u00af\u00e9Iz\u008d\u009c\u00c6\u00a4\u00e2\u00feBf\u00a9v\u00c1\u0088\\\u00db\u00c5\u00c9\u00e6\u00a3\u0007\u0093c\u0087\u0016\u00e2j$\u0098\u00be}\u0091f\u00c0z\u00f5\u0015\u0005\u008f\u001d\te \u00f8\u00be\u0092\u00df%[\u00bcsi\u00c8\u0090\u00d2\u00ca\u00e5\u00bb;\u00fd\u00f0\u00f5j\u0091\u0082\u0097\u00ceU\u0003\u0018\u00ef\u00edK\u0098\u00eeW-\u00b7\u00e0\u00c4\u0080mB\u00e0\u0003TS\u0085xMOc:\u008e!\u00e1QkkN7\u001f\u00c8\u008f\u00f3q\u00des\u00be\u00b0\u00d3G\u00b0\u00be\u008cIE\u008b\u008f\u00b0\u00ae,\u00ea\u009f\u0098\u009dn8\'\u00f6\u0082*\u00e1\u00ca\u00ed\u0095p \u0087p<\u00d1\u00f2)\u009a\u0087\u00c0\u00c9\u0087s\u00b4\u00cc\u00976\u0019rS\u007f\u00dc\u0017\u0092Co`P\u00c5L\u0001\u0081\u00c6\u00a2\u00e7\u00ee\u0099\u000e}\u00a9\u00dd\u000epk\u00d4I\u00d73\u00d9S%\u00f2\u00ac\u00cf\u00af\u00dc\u00e7\"\u00d1\u00f7\u00ce\u009e\u00d4\b~\u0013m\u0099l\u0014\u00c0\u00a2\u00d5\u00d6C8\u00cb\u00df\u0010|z\u0002,8\u00f1\u00a4=\u00fd\u00ed\u00a4;v\u00ca=\u00a5e\u00bc\u001c\u0000\u0093\u00f2\u00e4X\u00ff=[\u00bb\u0001\u00d3!\b/m\u0089\u00f4w\u0093LSl\u00f5\"j\u0012d\u0090\u00cb\u00db}E\u00c9o\u0093\u00d7Df\u00c4KI\u0099\u0096\u00c5{\u00ed\u0001)A\u00b7\u00d3\u00ec\u008ac\u000e\u000f\u00a9.\u00ad\u00a2\u008b}\u00d1v\u00be\u00cd\u00a5\u0094x\u00cd \u0096P\u00ac\u00fc\u00e7\u0081\u0018$p\u00b1AS\u00ff&\u0007\u00be\u00d3\u00ea6DX\u00df\'5\u00be\u00a4\u00b1\u00b6\u00a0a\u00c7\u00a0\u001d%\u00a1\u000b7}\u0003\u0017\u007f\u00dc\u00f6\u00ecu#\u00f6\u00c6\u00924\u008d\u0083\u00c1>\u00fbIR\u00e8\u0004{/\u001c}\u00b7\u00a7\u0081\u00a9\u0003\u0092g\u00e0\u00bd\u00d3\u008a\u0007^W-\u00c5\u0012y\u00c7\u00e5.\u0014\u00fb\u00ebQ4\u00da\u00a6\u00e8\u00b4\u00d8\u00c7\u00fd\u00b1\u00f6\u008eAx\u00db\u0004\u00fa\u00f9\u008e\u008agj\u000e\u00e4h\'{\u009f+\u00c0\u00a7\u00cb\u0016\u0011\u00c2\u0095\u00ee\u00ba\u00e3\u00fb%\u0088\u00e3\u00bbg\u00e5w\u00e7\u00ac\u00b2\u00b8X\u00c5P\u0000gH\u00a3\u00e7\u009e\u00ba)\fl\u0091\u00d0U\u00b8Tu\u00ea\u00d8c9b\u00faJ\n\u0005x\u00b1\tk\u00d9\u0093\u00b1q>z^\u00b9\r\u00b8\u007f+@\u00f6Q\u0004\u00baE\u009a\u00dc&\u00cf\u00ce\u00b1h\'e\u00f54\u008e\u00d8F\u0017\u0099\u00e2\u00aeS\u00df\u00cc\u00cf\u00a9d=\u00ca\u0003\u008b\u00d8\u00a6\u0080\u00f3\u00f2\u0005q7`\u009e-\u0096\u00bd\u00a2\u0086\u001dGu\u00b5\u00ef\u0087\u0005\u0013\u00ec\u0010\u0093\u00fc&\u00bd\u0012\u00f6\u00da\u00b2\u000b\u00bb\u00e95\u00cc}\u00e8ugc\u00c9\u0080\u00e2\u00f1\u00dd\u00ac\u00169\u0097\u00c0\u00cd\u00daZ1\n\u0014\u00e0{\u00b5\u001d\u00b3\u0087\u00d7\u000f\u0082\u00a4\u00a8\u00d6\u00ea5\u00a3\u00b6\u008f\u00fdg\u0087NkA5oP\u00d7\u00d2\u0094c)5Do%\u0002\u0087\u00d9SW\u00fe\u00dd\u00b7\u00129\u00e9\u009cH\u0096\u0003i\u001f\u00e3@\'\u00c0\u000fI\u00d8\u00b2S\u00e9\u00df\u00fd\u00a7\rV\u008b\u00989\u0082~\u00c0}\u008e3dS\u00b0<za\"\u00e1\u0013z\u00d8\u00d4\u0006\u00b37\u00eb\u00ee\u00fba\u008a\u00e6d\u008dQ{\u00ad)r6\u00f3\u00ab\u00ba0O\'\u008d\u0016\u00c2\u0091\u0090\u00ed\u00aa\u0019\u00f8\u0006\u00be\u00c9\u00bc\u00e2E5\u0011\u00c4\u00dd\u00c0\u0005o\u00c5$\u00b6\u00dc&\u001b\u00e2\u00a9M\b\u0090\u0097u\u0010\"\u00d3=\u00e2\u00cei\u00eb\u00fc\u00af\u000fxsvU\u001f\u00faX\u000e\u00e1\u00a2\u0002\u00edM\u00c8}\'\u0013r\u00b6\u00d7\u00871 \u00bd\u0090\u00f2\u00f2\u00a4\u00bc\u00ef\u0001,f\u00c9U\u00e8\u0090U\u00f5\u00ce\'\u00b7\u00843\u008e\u00fd\u0002\u00cdY\u00e9\u0006~\u00celR\u009a\u00ed\u0005\u00b8\u001bb\u00f6o\u00e93\u00b9\b\u00fc\u00f9\u00fe\u00fa\u00d9\u00ae\u00d08\u007f\u00df\u008aC\u00f4\u00af\"\u00cceE\u001d,?\u00fe$A\u00d8\u00ef\t\u00f2J\u0018\u0094\'\u00b5\u00c9\u00c3\u0080\u00b7Z\u0083\u00daF\u00a7\u001fE\u00198\u00d1\b\u00c1WC\u008fq,\u0090d\u00af\u0084\u00a9\u00dd\u00be4\u00b8\u00ffY|\u00b3\u00adT\u00de7\u00ef\u00df\u009fP\u00ca\u00b0\u00b5\u00ed\u000e\u008e\u0081\u009bJ}v\u00d3\u00f8>\b\u00a1\u00ea[\u00ee~\u0083O\u00a1G\u00ca\u00d4\u00812f\u00eet\u00ca\u00ffz`\u00f6\u00e7\u00c7\u00dc\u007f\u00e7\u00ed2_\u00f3V\u00d7I\u00ad\u00e1ms5*\u0003\u009a\u00e7\u00be\u0005\u007fWk\u00ac*\u00d3\u00c5\u001b\u00b7\u00e6\u00dd\u0002\u0013C\u00ceEY\u00e2I\u00f8\u00a1\u00ef\u00e4\u009aF\u0089,m-\u0083\u00ffG-W\u00d7K\u0013y)k\u0004\u00f4\u00f2\u00daAk\bD\u00fb:\u009eQ\u00eet\u00b18\u00f4@\u00df\u0098\u00bc\u00c3>\u000bq\u00e4\n\u00b5\u00de\u00927\u00c7\u00f5\u001e^\u00c0\u00ffIP\u0010\f\u0004\u00a8_0\u00adi\u0089\u00b3>#\u00b5\u0095\u00ac\u0005\u0080\'n5Z\u0084\u007f\u009a\u00ba\u001e\u00d0\u00f6\u0090i\u008e-_\u0006[\u0082\u00ec\u0014\u00c9\u00cf\u000b\u0019WI\u0013\f\u00ebF\u00eb%u}\u009c1_2SEU\u0098\u0012\u001er\u0094\u00afDR\u00f0G\u00ca\u00bdK\u00bc\u0001\u0094\u00b7un\u00a1\u00a9\r\u00faF\u00bet\u00031\u00a3f\u0015\u0004\u007fHq\u00b6\u00934\u00de\u00a0\u00aa\u007fM\u00a6\u00a2y\u00a6v\u0087v\n\u00bf8\u00b4{\u00c6\u00f9au\u00a5\u00d3\u001eN\u00b2\u00d4\u001b\u00e4n\u00974\u009b\u00b4\u0081\u001b\u0097\"\u00e2\u00e3\u008b\u00ab\u00af\u009d\u00bfb\u00e2\u00fd\u00b8\u00e3\u00de\u000f\u00fc\u0013\u00eae\u00ed\u00d2\u000e\u00eat\u0019\u00c8Q\u0081\u0099\u00f5\u00d5@\u0006\be\u008d\u00c36\u008d\u00a0\u00bfH\u00cd\u00cd\u0016\u00ffEL\u00175\u0093\u00db\u00d7\u0092{+\u007f\u00f2G|:\u00ab\u00d9\n\u0007\u00d5\u00b7\u00bfW\u00de\u00cf\u001f\u0018i\u00f0\u0004\u007f.\u0091\u00cd^\u0090\u00f9\u0091K\u0017\u00c9\u0087\u00d5\u008b\u009b\u00b2wC\u00ff\u00df\u00c6Z\u0083}1\u00e2\u00ccG2\u009ew\u00e9\u001br3\u00b7\u0018\u00b9\u00b4:\u001aQ9\'\u00b3M\u00b5\u00e0\u009d\u001c\u008d\u00b4\u00c5\u00ba\u0093A\u00e42X\u0081\u00dfq\u00ba\u00a3\u0094/\u00d0i\u0091\u001dV\u00d8\u00a3a\u00adIG\u00de\u00f8b\u00aaw\u00f0\u00e1\u00c9\u00a2\u000f\u00aff\u00b4mg\u000b\u00bc\u0091B\'\u00ed`[t\u0097\u00e1\u00db\u00f3\u0089\u00f6\u0094\\\u0017?T\u00fa\u0082\u0002a\u001f\u00f1Qc\u001b\nw*\u00d1\u00b1BT(@\u00dfJ=\u00a8\u008e\u00c0\u00c5\u00a6)\u00af\u00a3VKO\u00bc\u00c3L}Q\u001a\u00c7\u00f6\u00dd`\u00cf\u00f8\u001a \u0096h\u0098];\u000bI\u00a2\u00ea\'\u00b4\u00edX(\u00c7q\u00b0D\u00ceq\u00c0o\u00c1\u00bad\u00ca\u0082\u00bd\u00d2\u00fcJ\u00a6\u00a8\u00e4\\\u00d0\u000e\u0091\u001bF\u00bd\u00e9(q#\u001d\u00cc\u00b1\u009e\u00f1l*\u0085a\u00a7\u00e2&\bMX\u0014cl%\u00e2\u00bc\u0084\u00d7\u008a\u0095=YP\u00a5}\u00ea\u00b8E4j/z5\u00908j\u0005\u0096-b\u00e8q<\u00f1r\u0016\u00a7\u00846\u00df5wX\u00b2pT\u00e2A\u00a4\u00b2o\u00a8\u0097\u0098\u000eN0\u00eb\u00f5\u0001\u00de\u000eK6\u00fd\u00a4\u00f5+5d\u00a5\u00af\u00d6\u00c6\u00e92\u00d6Qpe\u0013\u00ec\u0012m\u00d0\u00e7_\u00fdD\u00e3\u00ef\u00e0\u009d\u0084\"#\u00b0\u00df\u0005\u00d13_\u00ad\u00ac6\u00f2(<Qa\u00fe\u00e1\u00e7\u00d9X\u0004-\u00d5#r\u0096\u00a6j\u009e\u0093p.p\f\u00ab|\u00f7s\u0083\u0083\u00cf\u000f\u00b5\u008f J=&\u00b97\u00eaq\u00f3f\u00a6V\u00f1\u00d6\u0089q\u00a8\nj\u0014\u00fc\u008cy]\u00b9am\u00f9\u00b2\u00c9\u009e\u0094\u00f2\u0012\f\r\r\u00a8\u001d\r\u00f0\u0095\u001e9\u00c2\u0091\u00fc\u0099x\u00d5\u00e45D\u00e0\u00fd\u00beV\u00a9\u00ad\u00e5OsP\u0004d\u008al_\u00fc0K\u00bf|\u0098B\u00f2\u00ae\u00f4\u0085\u00e8\u00cfK\u00d9\u00f0\u00dc\u0015\u008e\u00b7\u0000\u0085\u0089\u0019\u00dc}\u00ea\u008b\t\u0095h\u00ffR\u00af;\u00a2\u008ay\u00b6\u0004\u00dd\u009e8\u001a\u00a8W\u00b8\u00ea\u00ea\u00d2\u0096\u00db\u0001K\u009bxM\u00b3\u001f\u00e5\u0095\u00d8\u00f3\u00fcw\u00f7\u000e\u00c1\u00bd/=\u001b\u00a1\u00e9\u0010\u00dca\u0011\f\u00c2-4\u008e\u00be\u00b0\u0097\u00c9\u00a4\u00fe\u00fe{4\u008dX_3(\u00a3n\u00d6\u00bcg\u00cf\u00bb\u009a6\u00bag\u0096pb\u00c9\u0001\u00d7\b\u00fc\u00c2\u00bc\"\u00c1\u0001[R\u0005\u00ee[P1ka\u0012\u00c6\u0017\u00ac\u00d2@\u00cb\u00bfN\u00042\u0084\u00e8.\u00efqHRj\u00d3\u000f\u00d5\u008d\u00a0\u00dd{I \u00ad\u00cdU\u0012\u0007jI\u0088\u00ef\u00b7\u000ebp\u00018\u00ceN ?\u009b\u00e1:\u00d4\nhB\u0018w\u0007 \u00d5\u00ec\r\u00f8\u000bML$F\u0017\u00fd\u0018j\u00f4f\u0084\u00b8\u001bas\u000b3\u00ed\u0091l\u009c\u00e1\u00d4\u0094\"e\u00e5\u00f4\u00e0!K\u008c\u00c68\u00b8%\u0089\u0097M\u00d6\u0091\u0092\u00cf\u008aw\u00e74_\u00e2F\u00c8\u0088\u00f7X\u00edKz\u00d7\u00c7\u00ab%\u009b\u00c7\u00c1\u00111\u00efY\u0015\u00bf\u009d\u00dcp\u00dfl\'\u00b50\u00b8\u00dc@R\u001d\u00d5\u009f~F\u00eb\u00b4_\u009d\u0099\u00e8\u0014XMN)\u008a\u0005\u00d9*\u00e9\u009f\u00b2\u0098\u00bcM\u00fd\u00ea\u00a9U\"\u00da[)5Z\u00cc1d\u009c\u0092\u00d5\u00a5n\u0084\u00a9+p\u00f0\u00e16\u00a3F\u00cb\u00bb2y\u00ca\u00f7\u00b6\u0087\u0005yn\u00a8$62\u0016\u00b3@v\u00c5II.\u00e0\u0000\u00d0J65\u0011\u000el\u00e7\u0085x\u0097\u0001\u00fd\u00ee#\u00b7e\u00da\u00d3\u001f\u00ebD\u00f1^({\u0092\u0004\u009d\\\u00b6Q+\u00dd\u00dfh\u008c\u0084\u0085\u008fu\u00ac\u0017\u00a3\u00e43\u0095~\u00d9\u001f\u00b9\u00ff\b\u00eb\u0086\b\u00eb]\u0007\u00fd\u0087[fY\u0015\u00e1\u00f4\u00a7\u00ad\u0013\u00c9\r5\u00188\u001e\u00d64*oh\u0083\"Oy\u0093\u009e\u00b4R-\u0000\u00c8\u009a;\u0000\u00bb\u00e5\u00a4\u00da y\u0092\u0083\u00dd\t\u0081\u009fA\u00b7.\u00c7\u00e0\u00b3(\u00b77\u00eb\u0013u\u00f8\u00e2\u00b7h\u00c9{\u0010\u0097\u00f6\u00d8\u00dcvM\u00fc\u001a\u00e0\u0092-\u0010\u00db\u0092\u00a5\u00b4O\u00ac\u00f5\u00b1t\u00c4v\u00df\u00b3\u00ff\u00ee\u008c,T\u008f\u00bc\u00ce\u0099\u00df\u00bd\u001d\u00dc\u00c4\u0097\u001e\u00a5\u00a8&\u00d9\u00df\u00fe$v\u00fa1u-\b\t\u009d\u00ef\u00c0ZAPE\u0083\u00c2\u001d=R\u00e5\u00c2\u00a5O\u00f9\u0099\u00a2/\u009b\u00c3{\u007fi\u0093\u000e\u0084\u00c0\u0097\u008d\u00f7\u008f[\u00c8\u00aeU\u00af\u008d \u0089N\u00cb\u00fc\u0096\u00fc=\u00e8}\"@z\u00ed\u00bc\u00bd\u00f3r\u00f0\u009a\u0012\u009cX\u009dAa\u00fa=\u00db?\u00e45\u00ed\u00a8\u00b7|\r\u00b2H\u0092s\u009eC\u00dc\u00a8\u00d8\u0019#\u00ed\u00e2\u0007\u0018\u001a\u00ad\u00a7\u00e2\r\u00d1\u00fapQ8\u00dbT+\u00a4\u00a4%m\u000e\u001b*\u00ac\u0012\u00c7\u00d5\u0018\u00ddm\u00bc\u0019\u0088B\u00a2\u00a7\u009a\u00eb\u00d6\u00c9\u00b0\u00a0\u00a7\u00c4\u001f\u0090z\u009a\u00b5\u0088H\u00ef\u0092;k[x.WJ;\u000e9\u00a0\n\u00b1\u00dcez\u00f0\u008a\u008a\u00ccS\u0082F\u001dk\u0012\u0093\u0000[f\u00e1\u009e\u00e2\u0080\u00ef\u000fm\u0000@\u00c9~;\u0014R8T\u0014\u00da\u0018G\u000f&<\u0087\u0010f\u00d87\u00f1\u00d6\u00b2\u001c\u0088F*P\u0016\u001a\u008b\u00ee\u00dfM9Pt7\u00b4\u00f0\u001d\u00ca\u001dz\u0002\u0018\u00fcR\u0098\u00b1r\u0082Le\u001b~\u00ee\u00d0=\b\u00bdZ\u0099\u00b8\u00ce\u00aes.\u00c2\u00e5\u00a0\u00e1\u00cau\u00d9\u0080\u00de\u00c3\u0006\u00ee`\u00d8kC\u0004q#;\u00a1\u000b\u00d8\u00bf\u0004\"\u0081\u00c1_\u00a39\u0098\u00a3{\u00ad\u0096\u009e\u00c9\u0099\u00bb\u000fq\u0004\u00ce\u000e*\u008e\u00bd\u00a0\u0085\u00a0\b\u00c4\u00ea\u008d\u00a9\u00a4\u0090/{\u00efF\u007f\u007f\u0099p\u00d4:J\u00aex\u008b\u00be?\u00e0\u00ed=\u00e3r\u00cd\u00fb \u00ae\u00cb\f\u00f0UeC\\\u0091\u0002K\u0016\u0095\u00d7E,a1\u00cbG?\u008c\u00d0\u00b0\u00e2\u0096\u0095WU\u0087\u00c0b\u00ea\u000e\u0018\u00e7\u00e5\u00da?\u00c6\u00f2\u00ae\u0098\u00e6\u0084\u00a2?ez\u001e \u00bcX\u00b4\u0097\u009ccL\u00a2F\u001dM\u00bf\u00b0^6\u00affS0c\'.\u00f8<=\u00d9\u00ab\u0003\u00b3\u0099\u00f0)\u001d<\u00c5\u00af\u00fa\u00a2W\u00e7\u00e2\u0007\u00d6\u0089\u00e2\u00b2\u0003V\u00a3~W\u0011\u0092=M@\u0098Tyd\u00e8\u0087k#\u00c4\u00fb\u008b\u0093\u0003)\u007f\u00bf\u00fcy\u00ad\u00e5\\\n\u00cc\u00d4\u0010\u00c2\u00a7\\\u001e\u009aG\u00bf(\u00fe\u00fc\u001b\u009cI\u00c1A\u00cd;|_<Q^n\u00e0\u0080\u00a2\u0091\u00b5#\b\nKs\u0014\u0091J\u0000\u00c9\u00cfp1f\u00dd\u007f\u0088\u00aa\u00f1\u001bM#B\u00d2[\u00e2\u0003b{\u00b4\u00d7M)\u009c\u00b7\u00d5\u00a6x\u00b8\u00fa\u0002{kW\u0001\u00c0\u0090\u00df\u00f5\u007f7d\u00c9\u00e6$\u00db\u00a6qm\u0094e\u00ecpl\u00c7g\u0094\u0015\u00bao~\u0093\u00fd7\u00dd\'\u008f\u00af\u00fe\u00f9\"\u00e0\u00b0\u00ce,\u009c\u00fa\u00f2z-]\u00a7T\u00b2=U\u00e8\u009aV13N\u0010\u00b8\u00dc\u00cb2\u00f4\u00c9\u00f2\u00acqV^\u00b1\u009a\u0005}O\u00ad\u00f2\u00e7b~\u0096\u000eK\u00db\u00c0R\u0011*W\u00a6q\u001dC\u00b1!\u00f6\u0010\u00134\u00a1\u00d9\u00a1\fZ,\u00e3yrs+\u00c8m\u0000k\u00ab\u00ee|\u00fa{\u00c8\u001d\u00e6\u00b5\u00fd\u0082 \u00feLG\u00cc\u00b7\r;\u00a0\u00f04~a\u0003+L\u00fd\u00b5\u00a1\u00deA\u009d\u00b0;\u00e8\u008e\u00da\u00d9\u0087\u00b2\u00ac\u00ed\u0004)\u00ad\u00ca\u00a6\u00df\u00a9\u0012Wq\u00b3\u00a5\u00b2\u00c9U\u00e1\u00b2\r\u00b8\u0014A\u0088v\u00b5\u00d0\u000e6;\\\u00a6\u00bf\u000ba\u0082\u0088\u00d4F\u00f0G\u00b0\u0080.\u00a5e\u00fa;\u00e9\u00fbr\u0094\n\u00e2lDW$lr\u0010\u0011eG^\u001a\u0091U\u000e\u00c3\u00f1m\u00d6X\u00d9\u0091\u0084\u00f8\u00dbb\u00ab\u00a2\u00dc\u00cc\u0016\u00d2\u00a29\u00ad\u00d9\u00f2\u00a4\u001eV\u00c6\u00c5\'o\u00f4T\u00a9\u00d1\u00cc\u00cc\u00d2cc>\u00f0\u00ee\u00e0\u0005K#V \u00a1S-\u00c8\u0014\u001c\u00cb/\u00ff\bKD1.w\u0006d\u00b0G\u00b7r\u00e36\u0019\u00b1\u0019\u00c2\u008b\u00e9\u009ez\u00c0\u0006w\u00b2\u008cp\u00b1\u0012G~F\u0003B\u00b5\u00dc\u008b@\u00bc\u008cAi\u0015DGl\u00c9\u00fd\u00fa\tw\u00b5+\u00d0*_&\u00e7`\u00a9W0\u0015;of\u00c5J\u00fb\u0019`\u00fcd\u0093qX\u00c5\u00b7\u0015T*\u00ffv\u00d4\u00d0G\u00a5\u00cd3c\u00bb\u00df#\u008dBK\u00ccT\u00aaU(\u00e2ZZ2Q\u00f2mp\u0098\u00f5\u000b\u00e1J\u008e\u00935\u001a\u0092_\u0089`\u0086\u00b1\u00c8\u0007-\u0011\u00e6\u00dca\t,\u009c-\u0001H\u00b7\u00e6\u00cfwV\u0087Y/\u00c9\u0089\u00aa\u008a&\u0093\u00f8\u00b6\u009b\u00e3u\u00f2\u00de\u0011\u00a1\f*\u00aa\u0090cwY\u00faWk\u00d8G\\\u0093\u00ecQ\u0089*!\u0006\u0013Wx\u00c8\u00df\u00fa\u0083&}\u00d8\u00fe\u0094\u0095^?\u0081\u00d0\u00c5\u00cf\u008cQ\u00cf\u00ae\u0017a\u0098\u001a\u0084\u0090p8s\u00f1\u0093 \u0089\u00028\u0011\u00c7\r\n_]t\u001a\u00a2\r\u00f5\u00fa\u00ce8L>\n\u00ea\u00ef\u00c4\u00bc-\u001d\u00a9\u00e2b\u0099\u00e9\u00f7[\u0018\u00d3\u001e\u0001\u00f6\u000e\u00d0ii~\ty\u0085&\u00b7\u009e\u0097\u00d8[=\u008f\u009c\u009da.P\u00d2Agx\u00b3\u00ce\u00c1\u00d3\u0005~\u00db\u0010\u00c1\u0082F\u0017\u00eaz~t@\u00c8\u008ad5\u00c5\u00e1\u00fe&\u00cd%\u00e8\u00a1\u00f7\u00e3\u00a3\u00ae\u0095\u00d4\u00e5Mt\u009bCi\u0006\u00c4;\u00a1\u00e8,%\u00a0g\u0086\u00badJ\u0015\u00f4_y\u00d4Aq\u00ef\u001c\u00fbval=\u000f\u00f1\u00ff2}Zr_\u00b2G\u008a\u0095#j\u00a9I6\u0080q\u00a4\u0006\u0017\u00eb\u00efw>\u00b2o\bc\u00ed\u00d5\u00cb]\u00b3sA06\u00d2+\u00b0\u008f\u00b4\u00a7\u008e\u00bd#\u008fPW\u00ea-Y3x\u00d1k\u0003A:\u00fbtoL\u00b4\u00f8>Z\u000f\u00e4r\u00a0\u008a\u00da\u008c\u0091I\u00d4#*#Q\u0006\u00ec\u00d1\u001e\u00aaF@\u00fb2\u00c9\fF\u00fa\u00f8\u00fc\u00a8d\u00f3\u00acl\u00d1J\u009fIB\u00a3\u00aa#\u00a0\u00a3\u00a4\u00a1\u00fb\u0095\u00d9-\u00abbF\fz\u00a5\u007f\u00ae\u00b3(o\u00fb\"\u00b1\u0083\u0018C\u00b8\u0013\u00ed\u0019G\u009a\u0088.\u00baw\u00d8\u00fe\u0003\u0007\u00b1/fH\u00c7\u00f6\u00d4f\u00d3\u00a9\u00f7\u00e5\u0088]\u00ee?fj\u00ab\u00a5\u00ec\u00f7\u00c1\bJ\u00f8Ql\u00f1\u0095h\u00a5To\u00a2~\u009c#\u009aQ\u0000\u000b\u0014\u00f1\u0019\u00b6\u00c2h\u00ee\u00a7\u0081\u00d1\u00c3\u00e8\u00d7\u0080\u008e$\u00ab\u00aco\u00cd2\u00b7\u0004?\u009f\u00caDM6D\u00e4\u00c0\n8\u00bd\u000bc\u00de\u00e8\u0003\u00c9Qj&[\u00a7\u0002\u00c8d\\\u0006\u0016z\u0005\u00ac\u00e0\u00b0\u008cC\u008c\u00e1\u00dfI\u00df\u008b\u0086\u009c\u00ccA\u0097\u00bc\nkh\u00e8\"((8\u00f7\u00a9=@>{\u00b5D\u0006\\\u0095\u001e\u00f7m\'\u00b5l1\u0012\u0016\u00b8~-/\r\u00f3\u0093\u00bc\u0007\u0010|;X,\u00bf\u00b2\f\u00a2\u00e5\u00b3\u007f!\u00ae\u00af\u00a1\u0013y\u0090\u00e8H\u0089\u00a3})\u00ad\u00a2bt\u000e\u00baI,+\u00d9\u00d0T\u0015)\u0000\u009c\u00d8\r! ;\u001a\u00cd\u00f4-29\u0005B\u00fc\u00b2\u00cf5\u00e5\u000e\u008d\u00b2\u00c5\u00aa\"\u00ed\u001d\u00bd,\u00b9h\u00af\u00ff \u00a0V\u0016u\u00ed\u00ef\u00c0ZmV\u00c9:\u0005\u00b8\u00cd\u00db\u001f`\n\u00ab\u00efI\u00d81\u0085D\u008f\u00f1\u00e5F\u00f4_S\u00e1>\u00be\u00e6\u00e2\rF\tV\u00d6>\u00fb\u00fc\u00ffYQ\u00fd\u009c\u008b\u0080-\u000b\u0097d,\n\u00ca\n\u00a4v\u0004\u00e7W\u008e\u0090\u00d7\u00e9\u00da\u00fe\u00b5>\b\u00d3n\u0013*\u0007\u00e2\u00e271_\u00d3a\u00ca\u0006\u00d0\n\u0007\u0081\u00a4\u009e\u009b~\u00c6\u00cb~6\u00ea\u00c4\u009d\u00f0(\tWz?\u00c3\u0095\u00cd\u00cd\u0086\rc8YK\u00fa\u0098\u00b7\u0095\u00fc\u00f8u\u001d\u0000\u0006\u0002\u00d9\u00cfo^\u00afc@}\u00d9\u00c2\u00d2w\u001e\u00db\u00a4\u00ff:\t\u00ee\u00b4\u0098\u001d\u0093\u0016\u00e9\n0\u00da\u00d3\u00d2I\u00d6b\u001a\u00e4@L3\t\u00b5,\u00bc\u00f3\t\u00f0xA\u0018\u00f4\b\u00aa\u00c3N\u00d4\u008d\u00e1\u00e4m_\u00f2;cR3\u00a1\u00b8\u0096=T\u00c7xV\u00b2\u00b5>\u00f7\u00b0\u00966\f\u00e5Y\u00d3+\u00a6\u00fcI\u00a8\u00a8y\u00dd\u00a7u\u0010\u00dd\u00d9I\u0094\u00fbHP\u0080]\u0081`#\u00d1m8+\u0001\u00ce\u00c9\u0013\u0097\u0089\u00dd\u000eE\u009e\u00ea\u00ee\u00b2\u00af\u00bf\u00d4\u00beE>*\u00ad\u0085\u0086\u00ef\u00a1\u00f7{\u00b3-\n\u00c6\u00c5,\u008b\u00f1\u00b5\u00fe\u008e\r\u00fd\u0087\u00b1:\u00e5\u001a\u00a9t[,u\u00b1p\u00b2\f\u00b0\u00f1\u00d4\u00be\u008e\u00aa\u0081\u00e9\u00f6\u00aa\u00e8U\u0018X|\u0005\u00e7C\nX\u00c99\u00b0\u00bb\u001c\u00de\u00bf\u0010\u00d4\u00e9\u0080\u00ce\u00ddR\u0086\u00b8\u001a\u00f9\u00d3\u007f\u00fc\u001a\u008f\\\u0019=\u0088E\u00d6\u00a30\u00a3\u001f\u00f4\u00b3I\u00f8Z\u009fa\u00a7[D1\u00f7V\u00fa\u00c7}\u00a8\u0087\u00c4\u00ae\u0018\u009cS\u00f3G\u00b2\u008d\u0013*\u00cb\u00ffVH\u00f70\u00a6\u009cb\u00b8b\u00a2\u00e5\u00da\u007f\u00bd\u00a5\u00e0\u0093\u00f6\u00ce$\u00d7V\u0092l\u00b3\u00d7\u00bc\u00d5\u0016\u00d33CB\u0086\u00eb\u0014B\u009d\u001f\u00a2\u00f2:P\u0019\u00df\u00c1\u00fe\u00a0\u0091\u00cdp\u00c7N\u00aaYk\u00a9\u008f+\u0085\u00fdr\u00f6p\u001d\u009fI8\u0097\u00ba+\u0081\u0012\u00da}\u008a\u00f4} \u00e4\u009a\u00eby\u0099^\u00a0\u0082b\u0087v\u00eb\u009aPK\u0087\u00b4!\u00a6\u00dfa\u00d7=\u0013\u0000\u007f\u00c4\u00bbh?U\u00bd\u00d0\u0087bF\u00ac\u00ee\u009d\b\u0080\u00c6\u0006a\u00bd\u00b8\u00de\u0095&\u00a5\u00dc\u0002MX\u00b99\u00e4\u00c1,\u00bb\u00ff4\u00ca\u00e3\u00e3n\u00cbt^\u00f6\u0016\u00f9\u0083\u00f2\u009d\u0088\u00be\u0016g`\u00c5.\u00ba\u001d.\u00e4\u00c1\u00aa\u00ba\u000eT\u00d9\u00d6BJ\r}a\u00ca5\u00d0\u00c2c\u0092@K\u00d1\u0090\u0006\u008c\u009c\u00a8)\u00f6\u0089\u00df\u00b9\u0007o\u00a7\u00e5\u00ca\u00bc,\u0004\u00f7r\u000fe\u00e5Vx(t\u009fP\u00d3<-wp\u00e8\u0013\u00ad\u007fu\u00f3\u008dA\u00edCV\u0080\u001c\u0005\u00d10\u00d3@F\u00ce\u00a0>\u0082#W\u001fn\u00e2/\u00cc,\u0010\u00fa\u00e6\u00bc7Z(\u00f6ZD\u00d1/\u00a9\u001a\u00f0\u00fc\u00bdE\u00c6\u00a6W\u00c5}_py\u0001T\u00808f\u00a9fU\t\u00d2\u00f2\u0082\u00fa\u0084\u008e\u00ae\u00d0\u0092\u00a0\u0014\u0007F\u00a6M\u00c4\u000e\u0086\u00b4\u00cd\u00b5\\\nOx1\u001a0\u0098\u0080\u00f8\u00d7\u00ca1d\u0086\u00f5\u009f4\u00f0\u000fIsh\u00bd\u0088I\u00c4tGV\u0000zF\n32\u0084 2\u00f0\u008b\\P\u00a1?\u007f\u00e1+\u00d3I\u000f\u00e3\u0084\u00b57:Sl\u001f`\u00e0\u00b3\u009f\bf\u00be\u00c7\u00ff\u00d0\\x\u001aKs\u008eL\u00cf4F\u00a4\u00ce\u00ce>$\u00e9\u00fe4m-]\u00819\u00e5:M\u0018_h\u00f1\u00b1\u008a\u00af\u00ab\u0014\u0002\t\u00f1\u0096\u00ea\u00a2O\u0016}\u00aa\u001f\u001b_\u00c4\u00f66\u0004\u007f^\u00dc\u00acNp\u0014\u0017\u00d6\u00de\u001a\u00bc3\u008e\u0013L\u0011\u0080\u009c\u0085\u00f9\u00b1\u00a0\u0083`\u0013U\r\u0016K\u00baE_\u00d9\u0013\u00bc}\u009dXj(\u008c\u009d\u0014\u007f\u00e3,YZ\u00f9Of\u00c7\u00f6*\u00c53\u00c1\u00dc*\u00f5?\u00b3G\u00d4\u00a3K\u00b2\u0001N\u00c3\u001co\u00e89\u0015>/u\"/\u001c\u008c\u00b6\u00b8\u00c8ZpWo.-RD\u008d\u00e2<R)1\u00ebW8\u00a0\u008a\u0004\u007f\u00e1\u00a5\u00e92\u0003]\u00adG\u00dfZ:\u00b3\u0018\u00a1\u00b4W\u00d4\u0018\u0001\u00b9\u00aen\u00a9kE\u008e\u00a0x+\u00d5\u00e2\u00fa#?\u008fxF#\u00a1@\u001dO\u0094SaK\u00fc\u00c7\u008d\u00d6J\u00cbx\u00c6R\u0097\u00c3\u00a4\u00ac\u00e0\u0093\u0015R\u008c\u0092\u008f\u0015\u00da\u0016\u008d\u000b\u00d1M}(\u00cb\u00b16`R\u00b9\u0084\u00b4\u00ce[\u00ef\u0095\u00fe+\u00a9\\\u0085x<i6\u0098\u0013G\u0092f\u00b89H~\u00b9\u00ae\u00a1zBU\u00e5O\u00dbWa\n\u00bf\u007f\u0093\u0083\u00f0z4Bj\u0005\u00d7\u008e\u001b\u0087\u00ab>y\u0083S\u00bag\u009e\u00ef\u007f!\u00b1iX\u00c70\u0015\u00c9\u00cf\u00fe\r\u00b2\u00f3\u008c\u00d2c\u00bc\u00f0W\u001a\u00f4v\u00ad\u00fc\u00f5X\u00fd\u0091\u0093\u0016\u00a4\u00bb>\u0083Y\u00cbz\u00aa\u0085\u008f-s\u00dd\u00d4Vf\u009eka\u000e\u00c6(\u00f9\u00faN\u00fa\u009e\u00f4\u00be\u00d7\n\u00c0\u00e5C&@\u008dF\u008e\u00c8\u00b8\u00d7\u00c59w\u0012,\n\u00d0i\u0082,\u00eb\u0003\u00ef.\u009b*\u0018U\u00190\u00e0@\r\u00c1\u00ff\u00c7\u00a9!\u00c0|=\u009e\u00e7\u00a2fk\u00ecB \u0018_\u00d6\u00c3\u0005E\u00be,\u0015\u008b\u00e1J\u00c4\u00fa\u00a6\u00d6\u00f5\u0086\u00b7\u00ccd\u00d2\u009c\u008d\u000e}\u00e6\u00b9\b\u00a5\u0085\u00a6WO\u00cfsk\u00a4\u0017\u00d0\u00d0\u00d9C\u008e\u00c4\fb\u0017\u00c6\u0012\u009a\u00ea\u0013\u00f2\u00fb)Uh\u008a;\u0085\u00ec\u00a4\u00a1t\u00ee\u0092+\u00c0b\u000bA\\A\u00f7o\u001d\u008eG\u00adb(mQYI2\u00fe,\u0086\u00b9\u00fc\u00b6\u00f9\u00b7\u009d\u00bb-uxjCUU\u00ea\u00e8\u0013\u00a9\u00f22\u0003\u0004\u00e3\u0012\u00ef\u00ea\u0015\u001c\u007f\u0085\u0085\u00e0\u0017\u00b0m\u008c\u00cez\u00dc\u0097\u00d4\u0086\u00d0\u0019\u00811\u009c\u00d0\u00be\u001fLG\u00ae\u00b7\u000e\u0001S\u00a3>\nR,\u00ee\u0082\u0085Z\u00bc\u00fd\u00ec\u00d3\u0094i\u00dc\u00db\u009f\u00c2\u00b6\u0000$\u00af\u00e6c\u008a\u00a1\u00cc\u00e1\u00908\u00ba\u008d\u00a6\u00df\u00fft\u0018\u007fW\u00c92\u000e\u00c5G.\u00f6b\u00f5\u00ad\u00f3\u00f0\u00a2\u00d9:\u009bD\u0011pf\u007fW\u00bd\u000f+\u009b\u0082\u0014Z\u0016\u0097\u0089j\u0098\u00f5\u00bf%E\u00c9Tj\u00f5d\u0012\u00e8\u00b7Q\u00af\u0001\u00b1\u009c\u0097\u0080h\u001b\u00adq\u00e4{\u00cf\u007f\u00be\f^\u00e4\u00a9\u0018\u00b9\u00f3\\\u001aB\u00e66\u00d5d\u00cc\u00c7\u0096\u0005uR\b*\u00ed\u00d4\u00a3d\u00f6\u009a\u0098A\u008d\u00bb\u001e\u00fc\fE\n\u0018]\u00c3\u0006t\u00af\u00a7i\u00f7!\u007f\u00ed\u000f\u00ecRc\u00bb\u00b7(\u00bfE\u00d2b\u001e\u0090b\u00d1\u00b0v\u00a5\u00a6B\u009b\u0004>\u0014\u0019\u0006T\u00degV\u0083i\t\u00f4*\u00e1\u00d6\u00a4\u00f8\u00c5\u00d4\u00b5| \u00e2x\u00c8\u0095\u00d4t\u0012\u00ffl\u00a6\n\u0082\f\u0006\u0088\u0016\u008d\u00aaY\u001ai\u00cd\u00c8v\u00a3\u00df\u00ef\u00dc\u0002\u00a9:kk\u0011\u0086\t\u0087!\u007f\u00f3\u00021\u00a0\u00d7\u00b0r\u00e3\u0083\u008aj\u008dM\u00fd\u00e4/\u0007\u0092\u00a3\u00f1b\u0082\u0003K\u0084\u001e\u00a0\u00d1\u00ce\u00d7o\u00c7 =2\u00ceDZ\u00ec\u0084\u00e6\u00c0\u00aa\u00b8\u00abE\u00e3\u00cc\u0017\u0092\u0090\u00c4a\u00f3\u000fgL\u0089\u00faMz\u00c5B\u00c4nK(\u0097L\u00d5+\u00d3\u00e9,\u0007\u0001\u00cd~\u00ca\neE\u001d\u00cc\u008eY\u00e2\u00d7\u00b1M\u00c0\u0012a\u00e1\u00f3\u00fc|\u00d80h/{\u0093i\u0010\u00a5\u00e2\u007f\u00ac\u00e6\u00a4\u00a5\u0010\u00be\u00a5REu\u00e2Y\u00fd\u00c6\u0090\u0083\u00b9\u0098{=)\u00f5\u00a0\u0010\u00aac\u00c9\u0091\u0085\u0083\u00a0\u0010\u0087\u00afB:\u00a6C\u009e\u00d5\u001fj\u0081\u00e3AOt\u00bfYr\u00e7\u00bbWT\u00f4\u000ev \u00b2\u00eb>$h\u001b\u00a6+\u0091\u0091\u00b8\u0096q\u00ed\u00868\u00a4\u00c5T\u00ae\u0011T\u00a4\u00cb\u00a9+c?\u00a7\u00a3\u0012\u009di\u00a9\u00f6\u00e0\u00e8\u00bb\u008e\u00ae\u00f9(]<g7\u00d3\u0092?\u00a0\u00eb\'\u001b\u008a&{,Z\u00dd\u00d5i=Z\u0082\u009c\u00e9\u0089\u00db\u0096\u00dd\u001c\u00a2Sv6VF\u00d1y\u0080\u00a0\u00c3R\u00b1\u0087\u00eaL\u00f5D\u00c1\u00f4\u000f1\u00a1c\u00bc\u00e5\u00ae\u001f<\u00f1\u00c9\u0006R\u00ebqgm\b\u00e0\u00b6_\u00eb`/\u00cf\u0000l\u00d0c\u00e9\u0098\u001a\u0006\u00beo \u0091\u008d\u00f3\u00b8JG\u0093L\u00ea\u0016\u00cc\u0006\u00d51\u00a5N\u00acH\u001d\u00ee\u0098\u0016\u00d2H%\u00c5\u00e3f\u0006\u00e5iT\u00c8A^\u0089\u00f6|\u0002\b)\u00dau\u008e\u000bG\u009f\u00ce/E\u0089=Q\u00be\u00b1aY\u0014\u00fe*\u00dbU\fIm>\u000e\u00ba8L^2M!\u00ce\u00bc\u0096\u00f29\u00d8\u00f4\u00dd\u00e5!A|\u00a7D\u00cbR%E\u00eb+\u00f7\u00cf\u00a4b\u0007\u00f9\u00e4\u0094\u00ab\u00c1\u00af\t$q\u00f84\u0087\u00fe\u0099\u00c4\u00d0\'\u001b\u00e8?\u009d\u00dd>x\u00ae\u0091\u00f1\u0099\t\u0014\u00ba\u00baeW\u001d\u00d2\u00c2\u0099\u00b4\u00e3\t\u0014D\u008d\u0099rMM0\u0094\u00da\u00fe\u00d4\u00e7\u00aa\u0003\u00b6@z\u00b6\u0082g\u00fb,R\u0093b9\u00cf\u00cb8\b\u00a6\u00ad\u008f\u00936\b\u0096\u00a8M\u009b\u00ef!\u00eb\u0089\u009d5\u0084\u00e9\",\u0004[l8l4\u00d8Fq=\u001cN\u0000ST\f\u0005aV\u00b9>\u00ba\u00ba\u0088\u0081rJdK\'\u00ea\u0091\u00c0\u00ed\u00c4l\u00ab\u00d4AO\u00e9\u008b\u00dd\u0098\u001eme\u0081\u00d3\u00a8\u00e4\u00fd\u0004\u0014HL\u0088\u001fS\u00c2\u00b7\u00af\u00f8\u0019>\u001at\f\u00a5Sow\u00ec\u00a3\u0013\u001c\u0099\u00b0\u0084\u0011\u000f\u00a3\u00ea\u0017\u0011\u0094U\u0082\u001a\n\u00ddV\u0015\u0082\u00fcE\u0092\u00ac\u00ea\u00a6\u00b3~\u0019\u00f8\u00b8\u001e\u009c\u00c2\u00ca\u00b2\u00e9\u00f8O\u0082P$\u0089\u00b4\u00d1\u00ae\u00fc\u00d3\u00fbk\u00b4p\u00ec\u00e8]\u00a69\u00c9{\u00a0#[ \u00cfYMx\u00eed\u00a8\u00ee\u0081\u00cfr%t\u001a^G\u00db\u00e3\u0007\u00fbN\u00ad\u00f1\u0015\u00c2\u00c1\\Ex\u00f1\u001b\u00fa\u000f\u0004\u00b5~\u00dd\u009b\u00e9\"\u00e1\u00bc\u0013(\u00ed{u\u00c0\u00d6v\u00d3\u00c0\u0082\u0012\u0085\u001a\u0081:\u000e\u00b2\u00118:u3\u008dG\u00ec\u0089\u00f5\u008d\'\u00b2\u0082\u00c9\u00f2\u0012q\u00a6S\u00d0\u009c\bNE\u00c4\u00e8\rQ\u00b9^J\u0001\u00ca:\u00e1\u00c2\u008b\u00f7\u0018(\u009d-\u00ee\u00f8K\u00d7\u00aa\f*\u00959$\u00ef\u00d5\u00ad;\u0086\u00af\u00fbL!\u00d0a\u008e\u00ee\fR\u00d3F~8@&q\u00d6\u009c[$~\u00c5\u00c7,E\u00f63\u00c6\u009b\u00be]\u00c2\u00c2\t\u008a\u00aa\u00d46\u00b0h\u00b8.\u00c4\u00a8\u00e2\u00cdWj\u00ea\u00c0\u00a0H\u0003\u0010\u00e1\u0097\u00e1\u008b)\u00a2\u00c8y\u0018\u00aaN\u00ff\u0015\u00e1*\u001b\u00b5\u000f\u00da\u0098rf\u0015\u00ea\u0091w2\u00d8\u00ed\u00e8&\u00fa\u00cfq).\'K\u00c1\u00c8\u00ba\u00ad\u0015\u0003\u00af\u0094y\u00d8\u0012\u0082\u00bb\u00d9\u00da\u00184\u0080V3\u0083#g\u00fd<\u00c0\'\u009e\u00ba\u00f8\n\u001a\u0017XA4^VL\u00af\u00bc9\u00a2\u009f\u00ed\u00f2\u00eb\u009cx\u0080z\u00f8\\\u00f4\u00a9l\u00a9\u00e9\u000bN\u00a2\u0017\u00f57E\u008fR\u0000\u00d8\u00cd\u000f\'\u00efV[\u00ac@\u0011N\u008f_\u0017fgKV\u0010\u0084\u00a0\u0005\u00ab\u00b1\u00fe\u0004cm\u00c59H\u00b0\u00ed\u0089\u00e0P\u008f\u0095)Rk\u00afTV\u0094q\r\u0083_y\u00bf\u00d1z\u0090\u0092\u00da\u00bd5\u0005\u0000\u00e6\u00f8\u001d\nj\u00c5\u00f9\u00d3\u00eb\u0012\u00c5\u0004\u0010k\u00ec[\u00cb{\u00f3\u00d6\u001e\u0083\u00d4\u00d5)\u007f,G\u000f\u00bd\u00fb\u00f8\u00d9\u00fd\u00b8\u009c\u00eb>\u00de\u00c3\u00da\u00e9\u0010O\u00b1\u00173\u000e\u001f-\u00de\"\u0082*E\u0015D\u00e8\u0015\u009c\u00fdc\u00d1ps\u0081!#\u008c\u00a7LI;\u00eap\u00a1\u000bz\u000b\u001f_\u00d8\u00a5 \u008a\u00aa\u00fb\t*\\\u00a0\u000b\u00a8\u00b1\u00d9_-\u0086\nBn\u00bb\u0096v\u00d7)\u00a8\u00ec[IKs\u00d8\u00f7\u00a3\u00d3\u00c6\u008c\u0092h\u00be[&\u00e9\u00b1wP_\u00db]E\u0001y`\u00f2\u00a5 \u00fe\u00ba\u00c9\t\u00d0\u0000^ \u000bC\u00d7y\u00c5WN>s\u0096\u00ebL=\u00d1\u00ee\u009ds\u0094\u00a5\u00ee[6\u000b;\u00e3@~C\u00d57\u0092J\u00f48Q\u00b7\u00a7\u00e7\u00c3\u00b1\u0080\u00c0\u0097}4\u00a2\u00b3\u0086\u00db\\DA$\u008c\u00d3\u00f2\u00b7\u00d2n\u00f81\u00e0L\u001eT\u00cc\u00de\u0019)\r\u001cr\u0096\u00e4^\u00f7\u0013I6\u007f\'\u00b9\u00b7\u00b9A\u0092a\u00f3\u00ec\u00de}\u00c3\u0098AE\u00cdx\u00d9\u0014n\u0007K\u00bcK\u000b\b\u00e10q\u00f9\u009d\u00e5\u00fdsL^\u00c1j2\u00f2\u0011\u0091\u00e0<\u0018v\u00d7\u0090B\u00d9\u000f\u0001-\u0093\u00ad\u00b4+\u0085\u00ec\u000f\nI\u00e6X\u00fdT\u00ca\u00abH>\u00d4\u001fH4\u00d63\u00d4\u0082\u00e2\u00d1\u0099\u00a1\u008e\u00dd\u0004\u00b4\u009b\u00a3\f[\u0091\u00d3\u0084\u00c3\u0015L\\aF\u008e/\u00b6}p\u001d\u0091\u00cfRh{\u00f4=\u00e37\u0018\u00a0\t\u00f5\u00ac{\b\u00c5\u00fc\u0093$\u00bf\u00ed\u00cd\u00d3k=+<\u00db\u00c3QJ\u00d6\u0085\u00ab\u00907%]\u00fbI\u00b1WAd\u00b1\u008d`\u008dj\u00f6\u00f2\u0014\u0098\u00ffF\u0093\u0081\u00ech\u00ee\u00ec\u001f\u00cf~}\u00aer\u00173\u001d4\u00c9\u009d\u00de\u00fdT4\u00b8\u0081\u00a3\u00d8\u0089\u00df\u0011\u00d6\u00d7\u00bf\u0019q]H\u00aeZ\b\u0003\u00b2s\u00041^`\u00d5\u00df\'\u00adSs\u008d\u00ea\u00a1ls\u00d2ETR%\u008c\u001d\u001e\u00fdHx\u0091\u009d\u00b7\u00fe\u00b3;\u00db&\u0096\u0084A\u00d2\u00a8\u009b\b\u00b1\u00ab\u00fa\u0000\u00c8|\u00fa\u00b6\u00bc\u00dee=\u0016\u00bd\u00f9\u00a1\u00adm\u0093k\u00e7\u00c3\u0088\u0014U\u008e\u00e5\u00fdxj\u00f3~_3\u00a6\u008a\u0014\u00aa\u00b7U\u0085\u001d{\\\u00f6\b=\u00bb\u00d0\u00126\u00cf\u00b1\u000b#\u00dd\u0095bH\u00f3\u00e5{\b\u00f7\u00db\u00d1\u00cc\u00f6\u0081\u00ee\u0093\u0084\u000e\u0012rA\u00a7i\u000eD\u00b3VyG\u00b1\u000b\r4\u00ee\u0015\u00b9Bp\u009aw\u00fb%P\u00cc\u0091\u00ef\u009a\u00c0\u00b6\u0010z\u0096\u0089z\u00dbX\u0087\u00dc\r\u00cd\u00f9\u00a4\u00fc\u000f\u00d2\u00aa@\u009e\u001fR\u0018\u00b5z\"\u00baA\u00fb\u0095\u00fdU<\u00ff)\u000b\u009a;\u00919~\u00de~\u00b6J\u008f\u00c7;\u00fd\u009fNz5\u00c3V-\u00ed\u00ba3\u001fk\u00c3\u00bf\u00aeB\u00d7@i\u00f2\u0003qK(\u00d2\u00b7\u000b\u001f\u000f\u00e8\u00d2\u00cc\'\u00cb\u00f3\u00f3*gl\u00fe?\u00fb\u00ad\u0019S~~n\u00e3\u00bb\u00cc\u00a3U\u00faM\u00a9]dM\u0082\u0085\u00e5\u001eGU@\u0092[\u00c5S\u00d2B\u00b4&\u00d6@8.\u000b\u00ad\u00ff\u00be\u00e2\u008f\u00fc\u0002\u0089\u00b2\u00cc\u008e\u0095\u001e\u00ae\u00b7\u00b4\u00fa\u00dc)\u00c8\u00c6[xXsb\u0088]/\u00bc\u00b8\u001d\u00a7\u00bfH\u0080\u00d51\u00e2\u0092\u00b6\u00c5\u00c7\u00a9\u0014\u0018\u00bc\u00a7m%r\u00a2&u\u0096\u00e4\u00b9GLn\u0000\u00d2[\u0011X\u001e\u00a6\"\u0004\u0082s\u00ccd\u0012Q\u00ab\u00a5\u0007\u00ab\'\u0003&\u000b\u00c7:\u0099\u00e8\u009fx\u00d4\u00be\u0005]\"M\u00a0^\u0013A\u00fdw\u0003x;\u00ea\u00fb\u00b1\u00de<3\u0002\n\u00c9d\u000b.A\f\u00f8\u00ea+\u008a\u00c8\u00bf\u00e7\' \u00d2^\u00a39\u00fbw@\u00e5)\u0084\u00b7.\u0013M\u00f4z\u00c6\u00a6\u00ab\u00e4\f\u00a2\u0096|I\u00c2\u00dd\u009dx\u00b0\u00ffc\u009a&\u00e8SB\u0092v\u0083\u0012\u00d2q\u00cf+\u008bO\u00feTy\u0003*\u008c\u0010\u00ce\u00e3\u00f2\u0012\u00fd\u001aUOW\u0006\u00a4\u00e5\u0085\u00b3\u00af\u00a5\u0091\u0080^vd6;\u00fbg\u009e\u0088\u009dQe\u00b3\u00a6j\u00fe[\u00c3\u00e4P\u009e\u000f\u0006\u0003\u00ce\u001d\u001a\u00f0\u00d3)mRm~\u008f\u0001\u00c7^\u00d8\u0006H[.~\u0012y\u0014LVSH\u00c7\u0002\u00b7\u00c3\u00c2\u00ca\u00b0(\u00f0\u00ea2\u00de\u0086f\u0014r\f\u00a0vr\u00f3?\u00bc|5\u00a6(Fa@\u0095\u00d4\u00ec\u00aah\u0083\u00c5v\u009f\u00e5\u001aU\u00aa\u00ff\u00eb^\u00f9o.\u00de\u009f\u00da.sP\"\'\u0081\u00e1\u00a3\u00f6\u00b8FB6\u00b5\u0015\u0002\tY\u00ee\u0090Y\u0005C>\u009fGH7\u00desG\u0091\u0085LP\u008b\u00ed\u00a9db\u0017d\u001f\u00bft\u008c\u001a\u00e9\u00b6\u00d02\u00aenp\u00a4\u00b8z&\u0001\u00ccS\u00de\u00bd\u00e1C\u0089\u00b9L\u00c6\u00b5w3\u00eeE\u00fc0\u00d5\u008f_\u001d\u0088hH\u00c6\u0011|NSd&\u00e0\u009e\u008f}\u00d5-\u00ad\u009d\u00c1\u008fS\u00a9[-\u00b7\u0017\u0080\u00c1\u001a\u00a8\u00a3\u00b2{\u00e4\u00b8\rl\u00e8\u00ba\u001b\u00fd\u00e3\u00fc5\u00d9\u00f6\u00ed&\u00fe\u00ff=\u00a2\u00e2\u008e\u00b6DJ:\u00ccN{4U\u00036t7\u0086Z\u00b20m4\u0098\u00ac\u00f8/E\u00c1fd\u00e3qI\u00d1Fs\u00bc\u00d6\u00b0\u00b6#\u00c2\u00cd\u008bp\u00ba\u008f\u00e1\u001c\u0003\u00fb\u00d8\\4\u00847\u0082$\u00de\u00a3\u00f2}\u00e1\u00c4?{!%+(\u00a0\u0014\u008c\fj\u0092@\u00d2\n\u008e,B\u00e9\u0082\u00e6<1\u00d1\u0010\u00aev\u0081\u001c\u00d9\f\u00deg5\u00a7Yx(\u00ec\u0085\u00c0\u00c6g\u0093\'\u00c0\u00ca\u00da\u0003\\\u0000\u00a7c\u00cf\u00f8X\u0086h\u00ddNK\u00f7\u00ee\u00b7>\u00e5&ec\u00e9QJ\u0097U\u00e3\u00d7\u00f5\u00b0\u00b3O\u00d9\u008e\u0082)\u00c3\u00c9Ze\u007f\u00c7\u0083=/I\u00fc\u0000\u00f9\u00a3}-\u000f\u00de\u0092\u00a3\u00a4\u00f3\u00f8\u001e\u00e3f7=\u00bb\u00e3AA\n\u00da\u00a2\u001a\u0002\u00b9\fW\u00d2\u00b4\u00ee\u0085\u00d8\u00e8\u00a0j\u0018\u00b37<\u00177Z\u0095\u0010\u00b7\u001b\u00b7\u00e8\u00e3z0\u0093\u00d5[E=;\u008d\u00ec\u0010\u0015\u0089\u00eb3\u00d7Z\u00dd\u00a3BP\u001c\u00f6\u00d2\u00c9\u00de\u00927\u00e6@%\u0090\u001d%\u009bp\bC\u00dc_\u00dc[\u00f5CQ_\u00ba\u0011\u00d0\u0007\u00fc-\u00cd\u009f6\u0001\u00e6\u00ba\u00c2\u00b1z\u0094\u008e2&\u00da\u008d\u00d6\u00b4/v?\u0088\u00b1\u0081\u0016\u00b0\u00ade\u009b9\u00d18\u0098\u00df\u00fd\u0015&\u00e2\u00c1\u0018\u00dab(Luan\u0094\u00a5\u00c5\u00dd\u008bg\u00df\u00a7N\u00ee\u0001;\u00a4V_\u00b1S\u0080\u00e5\u00d2a\u0019\u008e\u00bf8\u00c9@\u00cd\u00ce]4\u00f5\u00f2\u00c9\u00a8\u0018\u009c+\u00a0s\u009f6\u0010s7\u0084M\u00cac;f:\u00fe\u00ad?\u001e\u00a6\u00b2\u00f7\u00f8\u00f3\u0083\u00e6C\u009f\u00b6\u00bb\u00b0\u00d2u\u00c5\u00f6Ns\u0081\u0012D\u00e7\u00cc\u0080A\u0091\u00a0\u00e9O\u00da\u001f\u00f3\u0091W\u00f8<\u00a2)\u00e2n\u00a8\u0086\u0012\u00c7\u00beu\u00e1\u00bf(E\u00a6\u00e3\"\u00e8\r\t>\u00fb\u0018\u00da\u00ee\'F\u001fT\u00c9?ac\u009bq\u008d\u00d8w\u0081\u00f6\u00ad\u00d8\u00aal$\u00f9DaQQ\u001au]\u0081\u00bb\u00f6>\u00b7C\b\u0013\u00e1{\u00b5cb\u007f)\u001fIu\u00ab\u0014\u00db\u0016\u00e0\u0006\u000e\u00c2\u00c1/\u001c\u0082\u00b2\u0090\u00bc\u0014ZH\u0094wo\u00f9\u00f7\u00e7\u00f2r\u00d0\u00cd\u00eeG\u0000\u001aY\u0089\u00dc\u0096\u00d3\u00e3GF\u00ea\u00e3\u00d1\u00bd\u0002|p\u0005\u008f|\u009f\u00d3\u00dd\u00a6eN^wJ+\u0011i\u0083O\u00f3\u00da\u00d8\u00f4=\u0010\u00b1A\u00ce\u00f2\u00ef\u00d4rAT\u008e\\\u00b6\u00b9k&<C\u00bc\u0089\u00d3\u00f8*\u00f0\u00a4\u009f\u00e2\'\u00b3YD\u0016\u00eb9\u00e5\u00b3\u0015\u00f2\u00c4\u00c7\u00c4q(\u0097\'\u009cp\u008d\u008c\u00e1W9?<\u00cem\u00a0\u00e8\u00a5\u00ea^X~\u00f4\u00165\n\u00e5\u00bf_\u0019a\u0007\u00a8&\u0087\u008a\u00e1\u0000\u00f6\u00f3\u008d\u00f0\u0002\u009cv\u00ba~R\u0001\u00bf\u00ca\u0010\u008a\'\u00fe\u008ex\u00fdH\u00d9gM\u009c\u00fa\u00d4\u00a6F2\u00bbU\u00baS\u0012\u00ba\u00fa:\u00a1Zx\u0083\u00bc\u00da\u008aV\u00a8\u00a8\u00b9(a\u00c2a/\u0098`&Y\u000e\u0090\u00b6h\u00df\u00d2\u0093\u00b5w\u00aa)\u0013?\u008c\u0095\u00a1\u00a5\u0094\u0083\f\u001c\u00b00\u00f9n=:\u0019$,\u00d3\u000f\u009a\u001et\u00a6&m\u001a\u0010\u0083\u000e\u0011z\u0011E/Rc\u00c0Wr\u00aa@\u00f0\u001b\u00d1\u00c9\u00ba\u00d3/\u00fd`\u009a\u00e6t^\"Q\u00f2f\u00b3\u0083\u00c8\u00e9\u00be(\u00af:L\u0086\u00f3b\u00cf\u0082\u00cfe\\\u007f\u00c2\u00df\u000f\u00ba\u00db\u00bc\u00f4:\u00c8\u001d*\u008e\u00aa@\u00d6\u00cc\u00bc\u00ffI\u00c0Kl\u00f2-\u00e3z/F\u000e\tQLsd4\u0097\u001bC\u0088}\u008f6\u00e0\"\u00d8s\u00d0\u0082\u00eb\u00bf\u00a7p\u0089\u00ae9\u000f\fz\u00b1\u0084\u00c1\u00ecN|\u00f4R\u00e0\u00f0\u00a7l\u00a3\u009e=+\u00bf\u00ca\u0098\u00afn\u001d\u00b1\u00e6\u0014*d5Kg#\u0012\u00ed\u001c?\u001c\u00c2\\}\u00f3\r\u00e1\u0085\u0081\u00f0&\u0012\u001f\u0080K\u009a\u008b\u00f74\u00c2c\u00ec\u008bv\u00e2wB\u00de`\u00ec\u0018\u000b_x\\\u0099\u00b5z\u009d\u001d\u00bdu]q\u0081\u00ca\u00b65\u001fK\u0002AV\u009c\u00fd\nS\u00e3\u00a7~\u00d4=w\u0007\u00c9@#\u00cev\u00c4\u00b0\u00b6o\u0099\u009eGK>\u00d8`\u00b3\u00b22\u0092\u00c2\u0087*\u00aa,\u0080,\u00ac\u00de\u0090k\u00c7\u00a8y01\u00b2\u00ad\u00c3\u00b7\u0094\u00ac@\u00fa=S]\u0001\r\u00c5jSaZ@\u00ae#\u00c5\\%\u00dfx\u0080\u0085O\u0002qg\u001f({#ft\u00a8o\u00aa\u0090(\u001c\u00d3\u0004\u0013\u00ff&]\u0087E9\u00b4\u0090\u00ab\u00ec\u00b5=\'4\u0010^\u00915\u0087\u00e9\u00cchC\u00fb\u008fH\u008cT[\u0088\u008d\u00ec\u00c8\u00e80\u00c2z\u00b1\u0099\u009a\u00cc\u00d3\u0095\u00af\u00ed\u00ebi\u001a\u00a6\u0019n\u0001\u00cci\r\u00ea\u00e6\u008eQo|\u00a2|\u00d2\u0014\u00ad\u0086\u00ee\u00b9C\u001c\u00d8\u00f2\u00ea\u00f0j7w\u0082\u000f\u00bat\u00ef\u00b4\u00b6\u0001\u0003,\u00c7\u0017\u008e_\u000f:hP*-P\u00c1O\u0004\b)=-3{\u00e8v\u0006\u008d\u00b6\u00b3f\u0006\u0006\b8\u000b\u0082\u0092\u001e{!\u00d2\u008fs\u008f\u00f1\u00db\u0089d\u0086h@\u00b0\u001a\u0005\u00c5\u00e8\u00a5@\u00ed\u00f3,\u007f\u00c6J\u0081\u00c8\u009c \u00b8dT0\u00b7!S\u008d\u00a4k\u00d3\u00fd\u00b8Y\u00d7\'\u00df\u00f8T==\u00e6\u00adO\u00b7\u00fcL\u008c\u0087\u0002\u00146\u00c9\u00fd\u00b3\u0013{0\u00ech\u0003\u00bfgl\u00f4-H\u0099P\u00db#O\u00ac\u00d0\u0016\" \u00a3\u00d0z\u00a7\u001a\u00bc;";
    FastMath.randIndex = -1;
    FastMath.MAX_RAND_CALLS = 10000;
    bc19.FastMath = FastMath;
    FastMath["__class"] = "bc19.FastMath";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Direction4;
    (function (Direction4) {
        Direction4[Direction4["North"] = 0] = "North";
        Direction4[Direction4["Northeast"] = 1] = "Northeast";
        Direction4[Direction4["East"] = 2] = "East";
        Direction4[Direction4["Southeast"] = 3] = "Southeast";
        Direction4[Direction4["South"] = 4] = "South";
        Direction4[Direction4["Southwest"] = 5] = "Southwest";
        Direction4[Direction4["West"] = 6] = "West";
        Direction4[Direction4["Northwest"] = 7] = "Northwest";
        Direction4[Direction4["Center"] = 8] = "Center";
        Direction4[Direction4["North2"] = 9] = "North2";
        Direction4[Direction4["East2"] = 10] = "East2";
        Direction4[Direction4["South2"] = 11] = "South2";
        Direction4[Direction4["West2"] = 12] = "West2";
    })(Direction4 = bc19.Direction4 || (bc19.Direction4 = {}));
    /** @ignore */
    var Direction4_$WRAPPER = (function () {
        function Direction4_$WRAPPER(_$ordinal, _$name, number) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            this.__number = 0;
            this.__number = number;
        }
        Direction4_$WRAPPER.prototype.number = function () {
            return this.__number;
        };
        Direction4_$WRAPPER.prototype.name = function () { return this._$name; };
        Direction4_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
        return Direction4_$WRAPPER;
    }());
    bc19.Direction4_$WRAPPER = Direction4_$WRAPPER;
    Direction4["__class"] = "bc19.Direction4";
    Direction4["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Direction4["_$wrappers"] = [new Direction4_$WRAPPER(0, "North", 0), new Direction4_$WRAPPER(1, "Northeast", 1), new Direction4_$WRAPPER(2, "East", 2), new Direction4_$WRAPPER(3, "Southeast", 3), new Direction4_$WRAPPER(4, "South", 4), new Direction4_$WRAPPER(5, "Southwest", 5), new Direction4_$WRAPPER(6, "West", 6), new Direction4_$WRAPPER(7, "Northwest", 7), new Direction4_$WRAPPER(8, "Center", 8), new Direction4_$WRAPPER(9, "North2", 9), new Direction4_$WRAPPER(10, "East2", 10), new Direction4_$WRAPPER(11, "South2", 11), new Direction4_$WRAPPER(12, "West2", 12)];
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * A class representing a map entry for a hashmap
     *
     * @version 1.0
     * @param {bc19.Point} key2
     * @param {number} value2
     * @param {bc19.MapEntryPI} next2
     * @class
     */
    var MapEntryPI = (function () {
        function MapEntryPI(key2, value2, next2) {
            var _this = this;
            if (((key2 != null && key2 instanceof bc19.Point) || key2 === null) && ((typeof value2 === 'number') || value2 === null) && ((next2 != null && next2 instanceof bc19.MapEntryPI) || next2 === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                (function () {
                    _this.key = key2;
                    _this.value = value2;
                    _this.next = next2;
                    _this.removed = false;
                })();
            }
            else if (((key2 != null && key2 instanceof bc19.Point) || key2 === null) && ((typeof value2 === 'number') || value2 === null) && next2 === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                var k_1 = __args[0];
                var v_1 = __args[1];
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                (function () {
                    _this.key = k_1;
                    _this.value = v_1;
                    _this.next = null;
                    _this.removed = false;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        MapEntryPI.prototype.getNext = function () {
            return this.next;
        };
        MapEntryPI.prototype.setNext = function (next) {
            this.next = next;
        };
        MapEntryPI.prototype.isRemoved = function () {
            return this.removed;
        };
        MapEntryPI.prototype.setRemoved = function (removed) {
            this.removed = removed;
        };
        MapEntryPI.prototype.getKey = function () {
            return this.key;
        };
        MapEntryPI.prototype.setKey = function (key) {
            this.key = key;
        };
        MapEntryPI.prototype.getValue = function () {
            return this.value;
        };
        MapEntryPI.prototype.setValue = function (value) {
            this.value = value;
        };
        MapEntryPI.prototype.equals = function (o) {
            if (!(o != null && o instanceof bc19.MapEntryPI)) {
                return false;
            }
            else {
                var that = o;
                return (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(that.getKey(), this.key) && (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(that.getValue(), this.value);
            }
        };
        MapEntryPI.prototype.toString = function () {
            return this.key.toString() + ": " + this.value.toString() + ", " + this.removed;
        };
        return MapEntryPI;
    }());
    bc19.MapEntryPI = MapEntryPI;
    MapEntryPI["__class"] = "bc19.MapEntryPI";
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * A class representing a map entry for a hashmap
     *
     * @version 1.0
     * @param {number} key2
     * @param {bc19.HashSetI} value2
     * @param {bc19.MapEntryIM} next2
     * @class
     */
    var MapEntryIM = (function () {
        function MapEntryIM(key2, value2, next2) {
            var _this = this;
            if (((typeof key2 === 'number') || key2 === null) && ((value2 != null && value2 instanceof bc19.HashSetI) || value2 === null) && ((next2 != null && next2 instanceof bc19.MapEntryIM) || next2 === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                (function () {
                    _this.key = key2;
                    _this.value = value2;
                    _this.next = next2;
                    _this.removed = false;
                })();
            }
            else if (((typeof key2 === 'number') || key2 === null) && ((value2 != null && value2 instanceof bc19.HashSetI) || value2 === null) && next2 === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                var k_2 = __args[0];
                var v_2 = __args[1];
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                (function () {
                    _this.key = k_2;
                    _this.value = v_2;
                    _this.next = null;
                    _this.removed = false;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        MapEntryIM.prototype.getNext = function () {
            return this.next;
        };
        MapEntryIM.prototype.setNext = function (next) {
            this.next = next;
        };
        MapEntryIM.prototype.isRemoved = function () {
            return this.removed;
        };
        MapEntryIM.prototype.setRemoved = function (removed) {
            this.removed = removed;
        };
        MapEntryIM.prototype.getKey = function () {
            return this.key;
        };
        MapEntryIM.prototype.setKey = function (key) {
            this.key = key;
        };
        MapEntryIM.prototype.getValue = function () {
            return this.value;
        };
        MapEntryIM.prototype.setValue = function (value) {
            this.value = value;
        };
        MapEntryIM.prototype.equals = function (o) {
            if (!(o != null && o instanceof bc19.MapEntryPI)) {
                return false;
            }
            else {
                var that = o;
                return (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(that.getKey(), this.key) && (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(that.getValue(), this.value);
            }
        };
        MapEntryIM.prototype.toString = function () {
            return this.key.toString() + ": " + this.value.toString() + ", " + this.removed;
        };
        return MapEntryIM;
    }());
    bc19.MapEntryIM = MapEntryIM;
    MapEntryIM["__class"] = "bc19.MapEntryIM";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var UnitType;
    (function (UnitType) {
        UnitType[UnitType["Castle"] = 0] = "Castle";
        UnitType[UnitType["Church"] = 1] = "Church";
        UnitType[UnitType["Pilgrim"] = 2] = "Pilgrim";
        UnitType[UnitType["Crusader"] = 3] = "Crusader";
        UnitType[UnitType["Prophet"] = 4] = "Prophet";
        UnitType[UnitType["Preacher"] = 5] = "Preacher";
    })(UnitType = bc19.UnitType || (bc19.UnitType = {}));
    /** @ignore */
    var UnitType_$WRAPPER = (function () {
        function UnitType_$WRAPPER(_$ordinal, _$name, number) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            this.__number = 0;
            this.__number = number;
        }
        UnitType_$WRAPPER.prototype.number = function () {
            return this.__number;
        };
        UnitType_$WRAPPER.prototype.name = function () { return this._$name; };
        UnitType_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
        return UnitType_$WRAPPER;
    }());
    bc19.UnitType_$WRAPPER = UnitType_$WRAPPER;
    UnitType["__class"] = "bc19.UnitType";
    UnitType["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    UnitType["_$wrappers"] = [new UnitType_$WRAPPER(0, "Castle", 0), new UnitType_$WRAPPER(1, "Church", 1), new UnitType_$WRAPPER(2, "Pilgrim", 2), new UnitType_$WRAPPER(3, "Crusader", 3), new UnitType_$WRAPPER(4, "Prophet", 4), new UnitType_$WRAPPER(5, "Preacher", 5)];
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Direction;
    (function (Direction) {
        Direction[Direction["North"] = 0] = "North";
        Direction[Direction["Northeast"] = 1] = "Northeast";
        Direction[Direction["East"] = 2] = "East";
        Direction[Direction["Southeast"] = 3] = "Southeast";
        Direction[Direction["South"] = 4] = "South";
        Direction[Direction["Southwest"] = 5] = "Southwest";
        Direction[Direction["West"] = 6] = "West";
        Direction[Direction["Northwest"] = 7] = "Northwest";
        Direction[Direction["Center"] = 8] = "Center";
    })(Direction = bc19.Direction || (bc19.Direction = {}));
    /** @ignore */
    var Direction_$WRAPPER = (function () {
        function Direction_$WRAPPER(_$ordinal, _$name, number) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            this.__number = 0;
            this.__number = number;
        }
        Direction_$WRAPPER.prototype.number = function () {
            return this.__number;
        };
        Direction_$WRAPPER.prototype.name = function () { return this._$name; };
        Direction_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
        return Direction_$WRAPPER;
    }());
    bc19.Direction_$WRAPPER = Direction_$WRAPPER;
    Direction["__class"] = "bc19.Direction";
    Direction["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Direction["_$wrappers"] = [new Direction_$WRAPPER(0, "North", 0), new Direction_$WRAPPER(1, "Northeast", 1), new Direction_$WRAPPER(2, "East", 2), new Direction_$WRAPPER(3, "Southeast", 3), new Direction_$WRAPPER(4, "South", 4), new Direction_$WRAPPER(5, "Southwest", 5), new Direction_$WRAPPER(6, "West", 6), new Direction_$WRAPPER(7, "Northwest", 7), new Direction_$WRAPPER(8, "Center", 8)];
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has
     * default initial capacity (16) and load factor (0.75).
     * @class
     */
    var MHashSet = (function () {
        function MHashSet() {
            this.map = null;
            this.map = new bc19.HashMap();
        }
        /**
         * Adds the specified element to this set if it is not already present. More
         * formally, adds the specified element <tt>e</tt> to this set if this set
         * contains no element <tt>e2</tt> such that
         * <tt>(e==null&nbsp;?&nbsp;e2==null&nbsp;:&nbsp;e.equals(e2))</tt>. If this set
         * already contains the element, the call leaves the set unchanged and returns
         * <tt>false</tt>.
         *
         * @param {bc19.Point} e element to be added to this set
         * @return {boolean} <tt>true</tt> if this set did not already contain the specified
         * element
         */
        MHashSet.prototype.add = function (e) {
            return this.map.add(e, MHashSet.PRESENT) == null;
        };
        /**
         * Returns <tt>true</tt> if this set contains no elements.
         *
         * @return {boolean} <tt>true</tt> if this set contains no elements
         */
        MHashSet.prototype.isEmpty = function () {
            return this.map.size() === 0;
        };
        /**
         * Returns the number of elements in this set (its cardinality).
         *
         * @return {number} the number of elements in this set (its cardinality)
         */
        MHashSet.prototype.size = function () {
            return this.map.size();
        };
        /**
         * Returns an iterator over the elements in this set. The elements are returned
         * in no particular order.
         *
         * @return {bc19.Point} an Iterator over the elements in this set
         * @see ConcurrentModificationException
         */
        MHashSet.prototype.getFirst = function () {
            return this.map.getFirst().getKey();
        };
        /**
         * Returns <tt>true</tt> if this set contains the specified element. More
         * formally, returns <tt>true</tt> if and only if this set contains an element
         * <tt>e</tt> such that
         * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
         *
         * @param {bc19.Point} o element whose presence in this set is to be tested
         * @return {boolean} <tt>true</tt> if this set contains the specified element
         */
        MHashSet.prototype.contains = function (o) {
            return this.map.contains(o);
        };
        /**
         * Removes the specified element from this set if it is present. More formally,
         * removes an element <tt>e</tt> such that
         * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>, if this set
         * contains such an element. Returns <tt>true</tt> if this set contained the
         * element (or equivalently, if this set changed as a result of the call). (This
         * set will not contain the element once the call returns.)
         *
         * @param {bc19.Point} o object to be removed from this set, if present
         * @return {boolean} <tt>true</tt> if the set contained the specified element
         */
        MHashSet.prototype.remove = function (o) {
            return this.map.remove(o) === MHashSet.PRESENT;
        };
        MHashSet.prototype.getList = function () {
            return this.map.getList();
        };
        return MHashSet;
    }());
    MHashSet.PRESENT = 0;
    bc19.MHashSet = MHashSet;
    MHashSet["__class"] = "bc19.MHashSet";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Team;
    (function (Team) {
        Team[Team["RED"] = 0] = "RED";
        Team[Team["BLUE"] = 1] = "BLUE";
    })(Team = bc19.Team || (bc19.Team = {}));
    /** @ignore */
    var Team_$WRAPPER = (function () {
        function Team_$WRAPPER(_$ordinal, _$name, number) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            this.__number = 0;
            this.__number = number;
        }
        Team_$WRAPPER.prototype.number = function () {
            return this.__number;
        };
        Team_$WRAPPER.prototype.name = function () { return this._$name; };
        Team_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
        return Team_$WRAPPER;
    }());
    bc19.Team_$WRAPPER = Team_$WRAPPER;
    Team["__class"] = "bc19.Team";
    Team["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Team["_$wrappers"] = [new Team_$WRAPPER(0, "RED", 0), new Team_$WRAPPER(1, "BLUE", 1)];
})(bc19 || (bc19 = {}));
(function (bc19) {
    var BCException = (function (_super) {
        __extends(BCException, _super);
        function BCException(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.message = errorMessage;
            Object.setPrototypeOf(_this, BCException.prototype);
            return _this;
        }
        return BCException;
    }(Error));
    bc19.BCException = BCException;
    BCException["__class"] = "bc19.BCException";
    BCException["__interfaces"] = ["java.io.Serializable"];
})(bc19 || (bc19 = {}));
(function (bc19) {
    var HashMapInterfacePP;
    (function (HashMapInterfacePP) {
        HashMapInterfacePP.STARTING_SIZE = 10;
        HashMapInterfacePP.MAX_LOAD_FACTOR = 0.67;
    })(HashMapInterfacePP = bc19.HashMapInterfacePP || (bc19.HashMapInterfacePP = {}));
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Debug = (function () {
        function Debug() {
        }
        Debug.sysout = function (s) {
            /* add */ (Debug.logs.push(s) > 0);
        };
        return Debug;
    }());
    Debug.logs = null;
    bc19.Debug = Debug;
    Debug["__class"] = "bc19.Debug";
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * A class representing a map entry for a hashmap
     *
     * @version 1.0
     * @param {bc19.Point} key2
     * @param {bc19.Point} value2
     * @param {bc19.MapEntryPP} next2
     * @class
     */
    var MapEntryPP = (function () {
        function MapEntryPP(key2, value2, next2) {
            var _this = this;
            if (((key2 != null && key2 instanceof bc19.Point) || key2 === null) && ((value2 != null && value2 instanceof bc19.Point) || value2 === null) && ((next2 != null && next2 instanceof bc19.MapEntryPP) || next2 === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                (function () {
                    _this.key = key2;
                    _this.value = value2;
                    _this.next = next2;
                    _this.removed = false;
                })();
            }
            else if (((key2 != null && key2 instanceof bc19.Point) || key2 === null) && ((value2 != null && value2 instanceof bc19.Point) || value2 === null) && next2 === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                var k_3 = __args[0];
                var v_3 = __args[1];
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                (function () {
                    _this.key = k_3;
                    _this.value = v_3;
                    _this.next = null;
                    _this.removed = false;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        MapEntryPP.prototype.getNext = function () {
            return this.next;
        };
        MapEntryPP.prototype.setNext = function (next) {
            this.next = next;
        };
        MapEntryPP.prototype.isRemoved = function () {
            return this.removed;
        };
        MapEntryPP.prototype.setRemoved = function (removed) {
            this.removed = removed;
        };
        MapEntryPP.prototype.getKey = function () {
            return this.key;
        };
        MapEntryPP.prototype.setKey = function (key) {
            this.key = key;
        };
        MapEntryPP.prototype.getValue = function () {
            return this.value;
        };
        MapEntryPP.prototype.setValue = function (value) {
            this.value = value;
        };
        MapEntryPP.prototype.equals = function (o) {
            if (!(o != null && o instanceof bc19.MapEntryPI)) {
                return false;
            }
            else {
                var that = o;
                return (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(that.getKey(), this.key) && (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(that.getValue(), this.value);
            }
        };
        MapEntryPP.prototype.toString = function () {
            return this.key.toString() + ": " + this.value.toString() + ", " + this.removed;
        };
        return MapEntryPP;
    }());
    bc19.MapEntryPP = MapEntryPP;
    MapEntryPP["__class"] = "bc19.MapEntryPP";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Util = (function () {
        function Util() {
        }
        Util.__dx_$LI$ = function () { if (Util.__dx == null)
            Util.__dx = [0, 1, 1, 1, 0, -1, -1, -1, 0]; return Util.__dx; };
        ;
        Util.__dy_$LI$ = function () { if (Util.__dy == null)
            Util.__dy = [-1, -1, 0, 1, 1, 1, 0, -1, 0]; return Util.__dy; };
        ;
        Util.__dx4_$LI$ = function () { if (Util.__dx4 == null)
            Util.__dx4 = [0, 1, 1, 1, 0, -1, -1, -1, 0, 0, 2, 0, -2]; return Util.__dx4; };
        ;
        Util.__dy4_$LI$ = function () { if (Util.__dy4 == null)
            Util.__dy4 = [-1, -1, 0, 1, 1, 1, 0, -1, 0, -2, 0, 2, 0]; return Util.__dy4; };
        ;
        Util.__dx9_$LI$ = function () { if (Util.__dx9 == null)
            Util.__dx9 = [0, 1, 1, 1, 0, -1, -1, -1, 0, 0, 2, 0, -2, 0, 1, 2, 2, 3, 2, 2, 1, 0, -1, -2, -2, -3, -2, -2, -1]; return Util.__dx9; };
        ;
        Util.__dy9_$LI$ = function () { if (Util.__dy9 == null)
            Util.__dy9 = [-1, -1, 0, 1, 1, 1, 0, -1, 0, -2, 0, 2, 0, -3, -2, -2, -1, 0, 1, 2, 2, 3, 2, 2, 1, 0, -1, -2, -2]; return Util.__dy9; };
        ;
        Util.preacheri_$LI$ = function () { if (Util.preacheri == null)
            Util.preacheri = ([]); return Util.preacheri; };
        ;
        Util.castlei_$LI$ = function () { if (Util.castlei == null)
            Util.castlei = ([]); return Util.castlei; };
        ;
        Util.castleo_$LI$ = function () { if (Util.castleo == null)
            Util.castleo = ([]); return Util.castleo; };
        ;
        Util.xid_$LI$ = function () { if (Util.xid == null)
            Util.xid = ({}); return Util.xid; };
        ;
        Util.yid_$LI$ = function () { if (Util.yid == null)
            Util.yid = ({}); return Util.yid; };
        ;
        Util.karbonP_$LI$ = function () { if (Util.karbonP == null)
            Util.karbonP = ([]); return Util.karbonP; };
        ;
        Util.fuelP_$LI$ = function () { if (Util.fuelP == null)
            Util.fuelP = ([]); return Util.fuelP; };
        ;
        Util.resGoalP_$LI$ = function () { if (Util.resGoalP == null)
            Util.resGoalP = ([]); return Util.resGoalP; };
        ;
        Util.init = function (myRobot) {
            Util.mr = myRobot;
            Util.me = Util.mr.me;
            Util.size = Util.mr.map.length;
            Util.p = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([Util.size, Util.size]);
            for (var i = 0; i < Util.size; ++i)
                for (var j = 0; j < Util.size; ++j)
                    Util.p[i][j] = new bc19.Point(i, j, Util.mr.map[j][i], Util.mr.karboniteMap[j][i], Util.mr.fuelMap[j][i]);
            ;
            Util.teami = function () { var result = []; for (var val in bc19.Team) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }()[Util.me.team];
            Util.teamo = function () { var result = []; for (var val in bc19.Team) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }()[1 - Util.me.team];
            bc19.FastMath.initRand(myRobot.id, Util.me.x);
            Util.initDone = true;
            Util.mr.log("init Passed :D");
        };
        Util.setupt = function (myRobot) {
            Util.mr = myRobot;
            Util.me = Util.mr.me;
            Util.myp = Util.p[Util.me.x][Util.me.y];
        };
        Util.dx = function (dir) {
            return Util.__dx_$LI$()[bc19.Direction["_$wrappers"][dir].number()];
        };
        Util.dy = function (dir) {
            return Util.__dy_$LI$()[bc19.Direction["_$wrappers"][dir].number()];
        };
        Util.dx4 = function (dir) {
            return Util.__dx4_$LI$()[bc19.Direction4["_$wrappers"][dir].number()];
        };
        Util.dy4 = function (dir) {
            return Util.__dy4_$LI$()[bc19.Direction4["_$wrappers"][dir].number()];
        };
        Util.dx9 = function (dir) {
            return Util.__dx9_$LI$()[bc19.Direction9["_$wrappers"][dir].number()];
        };
        Util.dy9 = function (dir) {
            return Util.__dy9_$LI$()[bc19.Direction9["_$wrappers"][dir].number()];
        };
        Util.checkOnMap$int$int = function (x, y) {
            return x >= 0 && x < Util.size && y >= 0 && y < Util.size;
        };
        Util.checkOnMap = function (x, y) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return bc19.Util.checkOnMap$int$int(x, y);
            }
            else if (((x != null && x instanceof bc19.Point) || x === null) && y === undefined) {
                return bc19.Util.checkOnMap$bc19_Point(x);
            }
            else
                throw new Error('invalid overload');
        };
        Util.checkOnMap$bc19_Point = function (po) {
            return po.x >= 0 && po.x < Util.size && po.y >= 0 && po.y < Util.size;
        };
        return Util;
    }());
    Util.p = null;
    Util.size = 0;
    Util.mr = null;
    Util.me = null;
    Util.myp = null;
    Util.dest = null;
    Util.mainPath = null;
    Util.subPath = null;
    Util.initDone = false;
    Util.teami = null;
    Util.teamo = null;
    Util.fTime = 0;
    Util.myCastle = null;
    Util.enCastle = null;
    bc19.Util = Util;
    Util["__class"] = "bc19.Util";
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * A class representing a hash map with linear probing collision handling.
     *
     * @author Christopher Tam
     *
     * @param <K> the type for the key of entries.
     * @param <V> the type for the value of entries.
     * @class
     */
    var HashMapPI = (function () {
        function HashMapPI() {
            this.table = null;
            this.__size = 0;
            this.list = null;
            this.clear();
            this.list = ([]);
        }
        HashMapPI.prototype.getList = function () {
            return this.list;
        };
        HashMapPI.prototype.getFirst = function () {
            var meo = (function (s) { return s[s.length - 1]; })(this.list);
            while ((meo != null && meo.isRemoved())) {
                /* pop */ this.list.pop();
                meo = (function (s) { return s[s.length - 1]; })(this.list);
            }
            ;
            return meo;
        };
        /**
         *
         * @param {bc19.Point} key
         * @param {number} value
         * @return {number}
         */
        HashMapPI.prototype.add = function (key, value) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            if (this.getNextLoadFactor() > bc19.HashMapInterfacePI.MAX_LOAD_FACTOR) {
                this.resize();
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            var lastentry = null;
            var result = null;
            var mea = null;
            if (entry == null) {
                mea = new bc19.MapEntryPI(key, value);
                this.table[index] = mea;
            }
            else {
                while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(entry.getKey(), key))) {
                    lastentry = entry;
                    entry = entry.getNext();
                }
                ;
                if (entry == null) {
                    mea = new bc19.MapEntryPI(key, value);
                    lastentry.setNext(mea);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(entry.getKey(), key)) {
                    if (!entry.isRemoved()) {
                        result = entry.getValue();
                    }
                    entry.setRemoved(true);
                    mea = new bc19.MapEntryPI(key, value, entry.getNext());
                    entry = mea;
                }
            }
            if (result == null)
                this.__size++;
            /* push */ (this.list.push(mea) > 0);
            return result;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {number}
         */
        HashMapPI.prototype.remove = function (key) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            var lastentry = null;
            var result = null;
            while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key))) {
                lastentry = entry;
                entry = entry.getNext();
            }
            ;
            if (entry == null) {
                return null;
            }
            else if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key)) {
                if (!entry.isRemoved()) {
                    entry.setRemoved(true);
                    result = entry.getValue();
                    this.__size--;
                    if (lastentry != null)
                        lastentry.setNext(entry.getNext());
                    else
                        this.table[index] = null;
                }
                else {
                    return null;
                }
                return result;
            }
            return null;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {number}
         */
        HashMapPI.prototype.get = function (key) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key)))
                entry = entry.getNext();
            if (entry != null && (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key) && !entry.isRemoved())
                return entry.getValue();
            return null;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {boolean}
         */
        HashMapPI.prototype.contains = function (key) {
            return this.get(key) != null;
        };
        /**
         *
         */
        HashMapPI.prototype.clear = function () {
            this.table = new Array(bc19.HashMapInterfacePI.STARTING_SIZE);
            this.__size = 0;
        };
        /**
         *
         * @return {number}
         */
        HashMapPI.prototype.size = function () {
            return this.__size;
        };
        /**
         *
         * @return {number[]}
         */
        HashMapPI.prototype.values = function () {
            var result = ([]);
            for (var i = 0; i < this.table.length; i++) {
                var entry = this.table[i];
                if (entry != null && !entry.isRemoved()) {
                    /* add */ (result.push(entry.getValue()) > 0);
                }
            }
            ;
            return result;
        };
        /**
         * Calculates the load factor if another element is added the HashMap.
         *
         * @return {number} Returns the load factor.
         * @private
         */
        /*private*/ HashMapPI.prototype.getNextLoadFactor = function () {
            return (this.__size + 1) / this.table.length;
        };
        /**
         * Doubles the size of the HashMap and inserts the elements into the new
         * @private
         */
        /*private*/ HashMapPI.prototype.resize = function () {
            var temp = this.table;
            this.table = new Array(temp.length * 2);
            for (var i = 0; i < temp.length; i++) {
                var entry = temp[i];
                if (entry != null && !entry.isRemoved()) {
                    var index = Math.abs(/* hashCode */ (function (o) { if (o.hashCode) {
                        return o.hashCode();
                    }
                    else {
                        return o.toString();
                    } })(entry.getKey())) % temp.length;
                    this.table[index] = entry;
                }
            }
            ;
        };
        /**
         * Gets the index of a given array-backed HashMap to add the given key.
         *
         * @param {bc19.Point} key The key to add.
         * @return {number} Returns the index to add to.
         * @private
         */
        /*private*/ HashMapPI.prototype.getAddIndex = function (key) {
            var index = Math.abs(/* hashCode */ (function (o) { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString();
            } })(key)) % this.table.length;
            return index;
        };
        return HashMapPI;
    }());
    bc19.HashMapPI = HashMapPI;
    HashMapPI["__class"] = "bc19.HashMapPI";
    HashMapPI["__interfaces"] = ["bc19.HashMapInterfacePI"];
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Point = (function () {
        function Point(x, y, passable, karbonite, fuel) {
            this.icastle = false;
            this.ocastle = false;
            this.x = 0;
            this.y = 0;
            this.passable = false;
            this.karbonite = false;
            this.fuel = false;
            this.lastTimeChange = 0;
            this.robot = 0;
            this.x = x;
            this.y = y;
            this.passable = passable;
            this.karbonite = karbonite;
            this.fuel = fuel;
        }
        Point.prototype.dirTo = function (dir) {
            if (bc19.Util.checkOnMap$int$int(this.x + bc19.Util.dx(dir), this.y + bc19.Util.dy(dir)))
                return bc19.Util.p[this.x + bc19.Util.dx(dir)][this.y + bc19.Util.dy(dir)];
            return null;
        };
        Point.prototype.dir4To = function (dir) {
            if (bc19.Util.checkOnMap$int$int(this.x + bc19.Util.dx4(dir), this.y + bc19.Util.dy4(dir)))
                return bc19.Util.p[this.x + bc19.Util.dx4(dir)][this.y + bc19.Util.dy4(dir)];
            return null;
        };
        Point.prototype.dir9To = function (dir) {
            if (bc19.Util.checkOnMap$int$int(this.x + bc19.Util.dx9(dir), this.y + bc19.Util.dy9(dir)))
                return bc19.Util.p[this.x + bc19.Util.dx9(dir)][this.y + bc19.Util.dy9(dir)];
            return null;
        };
        Point.prototype.dxTo = function (po) {
            return po.x - this.x;
        };
        Point.prototype.dyTo = function (po) {
            return po.y - this.y;
        };
        Point.prototype.dist2 = function (po) {
            return (this.x - po.x) * (this.x - po.x) + (this.y - po.y) * (this.y - po.y);
        };
        Point.prototype.distxy = function (po) {
            return Math.abs(this.x - po.x) + Math.abs(this.y - po.y);
        };
        /**
         *
         * @return {string}
         */
        Point.prototype.toString = function () {
            return "{x: " + this.x + ", y: " + this.y + "}";
        };
        return Point;
    }());
    bc19.Point = Point;
    Point["__class"] = "bc19.Point";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Direction9;
    (function (Direction9) {
        Direction9[Direction9["North"] = 0] = "North";
        Direction9[Direction9["Northeast"] = 1] = "Northeast";
        Direction9[Direction9["East"] = 2] = "East";
        Direction9[Direction9["Southeast"] = 3] = "Southeast";
        Direction9[Direction9["South"] = 4] = "South";
        Direction9[Direction9["Southwest"] = 5] = "Southwest";
        Direction9[Direction9["West"] = 6] = "West";
        Direction9[Direction9["Northwest"] = 7] = "Northwest";
        Direction9[Direction9["Center"] = 8] = "Center";
        Direction9[Direction9["North2"] = 9] = "North2";
        Direction9[Direction9["East2"] = 10] = "East2";
        Direction9[Direction9["South2"] = 11] = "South2";
        Direction9[Direction9["West2"] = 12] = "West2";
        Direction9[Direction9["NNN"] = 13] = "NNN";
        Direction9[Direction9["NNE"] = 14] = "NNE";
        Direction9[Direction9["NNEE"] = 15] = "NNEE";
        Direction9[Direction9["NEE"] = 16] = "NEE";
        Direction9[Direction9["EEE"] = 17] = "EEE";
        Direction9[Direction9["EES"] = 18] = "EES";
        Direction9[Direction9["EESS"] = 19] = "EESS";
        Direction9[Direction9["ESS"] = 20] = "ESS";
        Direction9[Direction9["SSS"] = 21] = "SSS";
        Direction9[Direction9["SSW"] = 22] = "SSW";
        Direction9[Direction9["SSWW"] = 23] = "SSWW";
        Direction9[Direction9["SWW"] = 24] = "SWW";
        Direction9[Direction9["WWW"] = 25] = "WWW";
        Direction9[Direction9["WWN"] = 26] = "WWN";
        Direction9[Direction9["WWNN"] = 27] = "WWNN";
        Direction9[Direction9["WNN"] = 28] = "WNN";
    })(Direction9 = bc19.Direction9 || (bc19.Direction9 = {}));
    /** @ignore */
    var Direction9_$WRAPPER = (function () {
        function Direction9_$WRAPPER(_$ordinal, _$name, number) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            this.__number = 0;
            this.__number = number;
        }
        Direction9_$WRAPPER.prototype.number = function () {
            return this.__number;
        };
        Direction9_$WRAPPER.prototype.name = function () { return this._$name; };
        Direction9_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
        return Direction9_$WRAPPER;
    }());
    bc19.Direction9_$WRAPPER = Direction9_$WRAPPER;
    Direction9["__class"] = "bc19.Direction9";
    Direction9["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Direction9["_$wrappers"] = [new Direction9_$WRAPPER(0, "North", 0), new Direction9_$WRAPPER(1, "Northeast", 1), new Direction9_$WRAPPER(2, "East", 2), new Direction9_$WRAPPER(3, "Southeast", 3), new Direction9_$WRAPPER(4, "South", 4), new Direction9_$WRAPPER(5, "Southwest", 5), new Direction9_$WRAPPER(6, "West", 6), new Direction9_$WRAPPER(7, "Northwest", 7), new Direction9_$WRAPPER(8, "Center", 8), new Direction9_$WRAPPER(9, "North2", 9), new Direction9_$WRAPPER(10, "East2", 10), new Direction9_$WRAPPER(11, "South2", 11), new Direction9_$WRAPPER(12, "West2", 12), new Direction9_$WRAPPER(13, "NNN", 13), new Direction9_$WRAPPER(14, "NNE", 14), new Direction9_$WRAPPER(15, "NNEE", 15), new Direction9_$WRAPPER(16, "NEE", 16), new Direction9_$WRAPPER(17, "EEE", 17), new Direction9_$WRAPPER(18, "EES", 18), new Direction9_$WRAPPER(19, "EESS", 19), new Direction9_$WRAPPER(20, "ESS", 20), new Direction9_$WRAPPER(21, "SSS", 21), new Direction9_$WRAPPER(22, "SSW", 22), new Direction9_$WRAPPER(23, "SSWW", 23), new Direction9_$WRAPPER(24, "SWW", 24), new Direction9_$WRAPPER(25, "WWW", 25), new Direction9_$WRAPPER(26, "WWN", 26), new Direction9_$WRAPPER(27, "WWNN", 27), new Direction9_$WRAPPER(28, "WNN", 28)];
})(bc19 || (bc19 = {}));
(function (bc19) {
    var BCAbstractRobot = (function () {
        function BCAbstractRobot() {
            this.SPECS = null;
            this.gameState = null;
            this.logs = null;
            this.__signal = 0;
            this.signalRadius = 0;
            this.__castleTalk = 0;
            this.me = null;
            this.id = 0;
            this.fuel = 0;
            this.karbonite = 0;
            this.lastOffer = null;
            this.map = null;
            this.karboniteMap = null;
            this.fuelMap = null;
            this.resetState();
        }
        BCAbstractRobot.prototype.setSpecs = function (specs) {
            this.SPECS = specs;
        };
        /*private*/ BCAbstractRobot.prototype.resetState = function () {
            this.logs = ([]);
            this.__signal = 0;
            this.signalRadius = 0;
            this.__castleTalk = 0;
        };
        BCAbstractRobot.prototype._do_turn = function (gameState) {
            this.gameState = gameState;
            this.id = gameState.id;
            this.karbonite = gameState.karbonite;
            this.fuel = gameState.fuel;
            this.lastOffer = gameState.last_offer;
            this.me = this.getRobot(this.id);
            if (this.me.turn === 1) {
                this.map = gameState.map;
                this.karboniteMap = gameState.karbonite_map;
                this.fuelMap = gameState.fuel_map;
            }
            var t = null;
            try {
                t = this.turn();
            }
            catch (e) {
                t = new bc19.ErrorAction(e, this.__signal, this.signalRadius, this.logs, this.__castleTalk);
            }
            ;
            if (t == null)
                t = new bc19.Action(this.__signal, this.signalRadius, this.logs, this.__castleTalk);
            t.signal = this.__signal;
            t.signal_radius = this.signalRadius;
            t.logs = this.logs;
            t.castle_talk = this.__castleTalk;
            this.resetState();
            return t;
        };
        /*private*/ BCAbstractRobot.prototype.checkOnMap = function (x, y) {
            return x >= 0 && x < this.gameState.shadow[0].length && y >= 0 && y < this.gameState.shadow.length;
        };
        BCAbstractRobot.prototype.log = function (message) {
            /* add */ (this.logs.push(message) > 0);
        };
        BCAbstractRobot.prototype.signal = function (value, radius) {
            var fuelNeeded = (Math.ceil(Math.sqrt(radius)) | 0);
            if (this.fuel < fuelNeeded)
                throw new bc19.BCException("Not enough fuel to signal given radius.");
            if (value < 0 || value >= Math.pow(2, this.SPECS.COMMUNICATION_BITS))
                throw new bc19.BCException("Invalid signal, must be within bit range.");
            if (radius > 2 * Math.pow(this.SPECS.MAX_BOARD_SIZE - 1, 2))
                throw new bc19.BCException("Signal radius is too big.");
            this.__signal = value;
            this.signalRadius = radius;
            this.fuel -= fuelNeeded;
        };
        BCAbstractRobot.prototype.castleTalk = function (value) {
            if (value < 0 || value >= Math.pow(2, this.SPECS.CASTLE_TALK_BITS))
                throw new bc19.BCException("Invalid castle talk, must be between 0 and 2^8.");
            this.__castleTalk = value;
        };
        BCAbstractRobot.prototype.proposeTrade = function (k, f) {
            if (this.me.unit !== this.SPECS.CASTLE)
                throw new bc19.BCException("Only castles can trade.");
            if (Math.abs(k) >= this.SPECS.MAX_TRADE || Math.abs(f) >= this.SPECS.MAX_TRADE)
                throw new bc19.BCException("Cannot trade over " + ('' + (this.SPECS.MAX_TRADE)) + " in a given turn.");
            return new bc19.TradeAction(f, k, this.__signal, this.signalRadius, this.logs, this.__castleTalk);
        };
        BCAbstractRobot.prototype.buildUnit = function (unit, dx, dy) {
            if (this.me.unit !== this.SPECS.PILGRIM && this.me.unit !== this.SPECS.CASTLE && this.me.unit !== this.SPECS.CHURCH)
                throw new bc19.BCException("This unit type cannot build.");
            if (this.me.unit === this.SPECS.PILGRIM && unit !== this.SPECS.CHURCH)
                throw new bc19.BCException("Pilgrims can only build churches.");
            if (this.me.unit !== this.SPECS.PILGRIM && unit === this.SPECS.CHURCH)
                throw new bc19.BCException("Only pilgrims can build churches.");
            if (dx < -1 || dy < -1 || dx > 1 || dy > 1)
                throw new bc19.BCException("Can only build in adjacent squares.");
            if (!this.checkOnMap(this.me.x + dx, this.me.y + dy))
                throw new bc19.BCException("Can\'t build units off of map.");
            if (this.gameState.shadow[this.me.y + dy][this.me.x + dx] !== 0)
                throw new bc19.BCException("Cannot build on occupied tile.");
            if (!this.map[this.me.y + dy][this.me.x + dx])
                throw new bc19.BCException("Cannot build onto impassable terrain.");
            if (this.karbonite < this.SPECS.UNITS[unit].CONSTRUCTION_KARBONITE || this.fuel < this.SPECS.UNITS[unit].CONSTRUCTION_FUEL)
                throw new bc19.BCException("Cannot afford to build specified unit.");
            return new bc19.BuildAction(unit, dx, dy, this.__signal, this.signalRadius, this.logs, this.__castleTalk);
        };
        BCAbstractRobot.prototype.move = function (dx, dy) {
            if (this.me.unit === this.SPECS.CASTLE || this.me.unit === this.SPECS.CHURCH)
                throw new bc19.BCException("Churches and Castles cannot move.");
            if (!this.checkOnMap(this.me.x + dx, this.me.y + dy))
                throw new bc19.BCException("Can\'t move off of map.");
            if (this.gameState.shadow[this.me.y + dy][this.me.x + dx] === -1)
                throw new bc19.BCException("Cannot move outside of vision range.");
            if (this.gameState.shadow[this.me.y + dy][this.me.x + dx] !== 0)
                throw new bc19.BCException("Cannot move onto occupied tile.");
            if (!this.map[this.me.y + dy][this.me.x + dx])
                throw new bc19.BCException("Cannot move onto impassable terrain.");
            var r = dx * dx + dy * dy;
            if (r > this.SPECS.UNITS[this.me.unit].SPEED)
                throw new bc19.BCException("Slow down, cowboy.  Tried to move faster than unit can.");
            if (this.fuel < r * this.SPECS.UNITS[this.me.unit].FUEL_PER_MOVE)
                throw new bc19.BCException("Not enough fuel to move at given speed.");
            return new bc19.MoveAction(dx, dy, this.__signal, this.signalRadius, this.logs, this.__castleTalk);
        };
        BCAbstractRobot.prototype.mine = function () {
            if (this.me.unit !== this.SPECS.PILGRIM)
                throw new bc19.BCException("Only Pilgrims can mine.");
            if (this.fuel < this.SPECS.MINE_FUEL_COST)
                throw new bc19.BCException("Not enough fuel to mine.");
            if (this.karboniteMap[this.me.y][this.me.x]) {
                if (this.me.karbonite >= this.SPECS.UNITS[this.SPECS.PILGRIM].KARBONITE_CAPACITY)
                    throw new bc19.BCException("Cannot mine, as at karbonite capacity.");
            }
            else if (this.fuelMap[this.me.y][this.me.x]) {
                if (this.me.fuel >= this.SPECS.UNITS[this.SPECS.PILGRIM].FUEL_CAPACITY)
                    throw new bc19.BCException("Cannot mine, as at fuel capacity.");
            }
            else
                throw new bc19.BCException("Cannot mine square without fuel or karbonite.");
            return new bc19.MineAction(this.__signal, this.signalRadius, this.logs, this.__castleTalk);
        };
        BCAbstractRobot.prototype.give = function (dx, dy, k, f) {
            if (dx > 1 || dx < -1 || dy > 1 || dy < -1 || (dx === 0 && dy === 0))
                throw new bc19.BCException("Can only give to adjacent squares.");
            if (!this.checkOnMap(this.me.x + dx, this.me.y + dy))
                throw new bc19.BCException("Can\'t give off of map.");
            if (this.gameState.shadow[this.me.y + dy][this.me.x + dx] <= 0)
                throw new bc19.BCException("Cannot give to empty square.");
            if (k < 0 || f < 0 || this.me.karbonite < k || this.me.fuel < f)
                throw new bc19.BCException("Do not have specified amount to give.");
            return new bc19.GiveAction(k, f, dx, dy, this.__signal, this.signalRadius, this.logs, this.__castleTalk);
        };
        BCAbstractRobot.prototype.attack = function (dx, dy) {
            if (this.me.unit === this.SPECS.CHURCH)
                throw new bc19.BCException("Churches cannot attack.");
            if (this.fuel < this.SPECS.UNITS[this.me.unit].ATTACK_FUEL_COST)
                throw new bc19.BCException("Not enough fuel to attack.");
            if (!this.checkOnMap(this.me.x + dx, this.me.y + dy))
                throw new bc19.BCException("Can\'t attack off of map.");
            if (this.gameState.shadow[this.me.y + dy][this.me.x + dx] === -1)
                throw new bc19.BCException("Cannot attack outside of vision range.");
            var r = dx * dx + dy * dy;
            if (r > this.SPECS.UNITS[this.me.unit].ATTACK_RADIUS[1] || r < this.SPECS.UNITS[this.me.unit].ATTACK_RADIUS[0])
                throw new bc19.BCException("Cannot attack outside of attack range.");
            return new bc19.AttackAction(dx, dy, this.__signal, this.signalRadius, this.logs, this.__castleTalk);
        };
        BCAbstractRobot.prototype.getRobot = function (id) {
            if (id <= 0)
                return null;
            for (var i = 0; i < this.gameState.visible.length; i++) {
                if (this.gameState.visible[i].id === id) {
                    return this.gameState.visible[i];
                }
            }
            ;
            return null;
        };
        BCAbstractRobot.prototype.isVisible = function (robot) {
            for (var x = 0; x < this.gameState.shadow[0].length; x++) {
                for (var y = 0; y < this.gameState.shadow.length; y++) {
                    if (robot.id === this.gameState.shadow[y][x])
                        return true;
                }
                ;
            }
            ;
            return false;
        };
        BCAbstractRobot.prototype.isRadioing = function (robot) {
            return robot.signal >= 0;
        };
        BCAbstractRobot.prototype.getVisibleRobotMap = function () {
            return this.gameState.shadow;
        };
        BCAbstractRobot.prototype.getPassableMap = function () {
            return this.map;
        };
        BCAbstractRobot.prototype.getKarboniteMap = function () {
            return this.karboniteMap;
        };
        BCAbstractRobot.prototype.getFuelMap = function () {
            return this.fuelMap;
        };
        BCAbstractRobot.prototype.getVisibleRobots = function () {
            return this.gameState.visible;
        };
        BCAbstractRobot.prototype.turn = function () {
            return null;
        };
        return BCAbstractRobot;
    }());
    bc19.BCAbstractRobot = BCAbstractRobot;
    BCAbstractRobot["__class"] = "bc19.BCAbstractRobot";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var HashMapInterfacePI;
    (function (HashMapInterfacePI) {
        HashMapInterfacePI.STARTING_SIZE = 10;
        HashMapInterfacePI.MAX_LOAD_FACTOR = 0.67;
    })(HashMapInterfacePI = bc19.HashMapInterfacePI || (bc19.HashMapInterfacePI = {}));
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * A class representing a hash map with linear probing collision handling.
     *
     * @author Christopher Tam
     *
     * @param <K> the type for the key of entries.
     * @param <V> the type for the value of entries.
     * @class
     */
    var HashMapIM = (function () {
        function HashMapIM() {
            this.table = null;
            this.__size = 0;
            this.list = null;
            this.clear();
            this.list = ([]);
        }
        HashMapIM.prototype.getList = function () {
            return this.list;
        };
        HashMapIM.prototype.getFirst = function () {
            var meo = (function (s) { return s[s.length - 1]; })(this.list);
            while ((meo != null && meo.isRemoved())) {
                /* pop */ this.list.pop();
                meo = (function (s) { return s[s.length - 1]; })(this.list);
            }
            ;
            return meo;
        };
        /**
         *
         * @param {number} key
         * @param {bc19.HashSetI} value
         * @return {bc19.HashSetI}
         */
        HashMapIM.prototype.add = function (key, value) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            if (this.getNextLoadFactor() > bc19.HashMapInterfaceIM.MAX_LOAD_FACTOR) {
                this.resize();
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            var lastentry = null;
            var result = null;
            var mea = null;
            if (entry == null) {
                mea = new bc19.MapEntryIM(key, value);
                this.table[index] = mea;
            }
            else {
                while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(entry.getKey(), key))) {
                    lastentry = entry;
                    entry = entry.getNext();
                }
                ;
                if (entry == null) {
                    mea = new bc19.MapEntryIM(key, value);
                    lastentry.setNext(mea);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(entry.getKey(), key)) {
                    if (!entry.isRemoved()) {
                        result = entry.getValue();
                    }
                    entry.setRemoved(true);
                    mea = new bc19.MapEntryIM(key, value, entry.getNext());
                    entry = mea;
                }
            }
            if (result == null)
                this.__size++;
            /* push */ (this.list.push(mea) > 0);
            return result;
        };
        /**
         *
         * @param {number} key
         * @return {bc19.HashSetI}
         */
        HashMapIM.prototype.remove = function (key) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            var lastentry = null;
            var result = null;
            while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key))) {
                lastentry = entry;
                entry = entry.getNext();
            }
            ;
            if (entry == null) {
                return null;
            }
            else if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key)) {
                if (!entry.isRemoved()) {
                    entry.setRemoved(true);
                    result = entry.getValue();
                    this.__size--;
                    if (lastentry != null)
                        lastentry.setNext(entry.getNext());
                    else
                        this.table[index] = null;
                }
                else {
                    return null;
                }
                return result;
            }
            return null;
        };
        /**
         *
         * @param {number} key
         * @return {bc19.HashSetI}
         */
        HashMapIM.prototype.get = function (key) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key)))
                entry = entry.getNext();
            if (entry != null && (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key) && !entry.isRemoved())
                return entry.getValue();
            return null;
        };
        /**
         *
         * @param {number} key
         * @return {boolean}
         */
        HashMapIM.prototype.contains = function (key) {
            return this.get(key) != null;
        };
        /**
         *
         */
        HashMapIM.prototype.clear = function () {
            this.table = new Array(bc19.HashMapInterfaceIM.STARTING_SIZE);
            this.__size = 0;
        };
        /**
         *
         * @return {number}
         */
        HashMapIM.prototype.size = function () {
            return this.__size;
        };
        /**
         *
         * @return {bc19.HashSetI[]}
         */
        HashMapIM.prototype.values = function () {
            var result = ([]);
            for (var i = 0; i < this.table.length; i++) {
                var entry = this.table[i];
                if (entry != null && !entry.isRemoved()) {
                    /* add */ (result.push(entry.getValue()) > 0);
                }
            }
            ;
            return result;
        };
        /**
         * Calculates the load factor if another element is added the HashMap.
         *
         * @return {number} Returns the load factor.
         * @private
         */
        /*private*/ HashMapIM.prototype.getNextLoadFactor = function () {
            return (this.__size + 1) / this.table.length;
        };
        /**
         * Doubles the size of the HashMap and inserts the elements into the new
         * @private
         */
        /*private*/ HashMapIM.prototype.resize = function () {
            var temp = this.table;
            this.table = new Array(temp.length * 2);
            for (var i = 0; i < temp.length; i++) {
                var entry = temp[i];
                if (entry != null && !entry.isRemoved()) {
                    var index = Math.abs(/* hashCode */ (function (o) { if (o.hashCode) {
                        return o.hashCode();
                    }
                    else {
                        return o.toString();
                    } })(entry.getKey())) % temp.length;
                    this.table[index] = entry;
                }
            }
            ;
        };
        /**
         * Gets the index of a given array-backed HashMap to add the given key.
         *
         * @param {number} key The key to add.
         * @return {number} Returns the index to add to.
         * @private
         */
        /*private*/ HashMapIM.prototype.getAddIndex = function (key) {
            var index = Math.abs(/* hashCode */ (function (o) { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString();
            } })(key)) % this.table.length;
            return index;
        };
        return HashMapIM;
    }());
    bc19.HashMapIM = HashMapIM;
    HashMapIM["__class"] = "bc19.HashMapIM";
    HashMapIM["__interfaces"] = ["bc19.HashMapInterfaceIM"];
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * A class representing a map entry for a hashmap
     *
     * @version 1.0
     * @param {bc19.Point} key2
     * @param {number} value2
     * @param {bc19.MapEntry} next2
     * @class
     */
    var MapEntry = (function () {
        function MapEntry(key2, value2, next2) {
            var _this = this;
            if (((key2 != null && key2 instanceof bc19.Point) || key2 === null) && ((typeof value2 === 'number') || value2 === null) && ((next2 != null && next2 instanceof bc19.MapEntry) || next2 === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                (function () {
                    _this.key = key2;
                    _this.value = value2;
                    _this.next = next2;
                    _this.removed = false;
                })();
            }
            else if (((key2 != null && key2 instanceof bc19.Point) || key2 === null) && ((typeof value2 === 'number') || value2 === null) && next2 === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                var k_4 = __args[0];
                var v_4 = __args[1];
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                this.removed = false;
                this.key = null;
                this.value = null;
                this.next = null;
                (function () {
                    _this.key = k_4;
                    _this.value = v_4;
                    _this.next = null;
                    _this.removed = false;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        MapEntry.prototype.getNext = function () {
            return this.next;
        };
        MapEntry.prototype.setNext = function (next) {
            this.next = next;
        };
        MapEntry.prototype.isRemoved = function () {
            return this.removed;
        };
        MapEntry.prototype.setRemoved = function (removed) {
            this.removed = removed;
        };
        MapEntry.prototype.getKey = function () {
            return this.key;
        };
        MapEntry.prototype.setKey = function (key) {
            this.key = key;
        };
        MapEntry.prototype.getValue = function () {
            return this.value;
        };
        MapEntry.prototype.setValue = function (value) {
            this.value = value;
        };
        MapEntry.prototype.equals = function (o) {
            if (!(o != null && o instanceof bc19.MapEntry)) {
                return false;
            }
            else {
                var that = o;
                return (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(that.getKey(), this.key) && (function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(that.getValue(), this.value);
            }
        };
        MapEntry.prototype.toString = function () {
            return this.key.toString() + ": " + this.value.toString() + ", " + this.removed;
        };
        return MapEntry;
    }());
    bc19.MapEntry = MapEntry;
    MapEntry["__class"] = "bc19.MapEntry";
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * Creates a {@code PriorityQueue} with the specified initial capacity that
     * orders its elements according to the specified comparator.
     *
     * @param {number} initialCapacity the initial capacity for this priority queue
     * @param comparator      the comparator that will be used to order this
     * priority queue. If {@code null}, the
     * {@linkplain Comparable natural ordering} of the
     * elements will be used.
     * @throws IllegalArgumentException if {@code initialCapacity} is less than 1
     * @class
     */
    var MPriorityQueue = (function () {
        function MPriorityQueue(initialCapacity) {
            var _this = this;
            /**
             * The number of elements in the priority queue.
             */
            /*private*/ this.__size = 0;
            /**
             * The number of times this priority queue has been <i>structurally
             * modified</i>. See AbstractList for gory details.
             */
            this.modCount = 0;
            if (((typeof initialCapacity === 'number') || initialCapacity === null)) {
                var __args = Array.prototype.slice.call(arguments);
                this.queue = null;
                this.__size = 0;
                this.modCount = 0;
                this.queue = null;
                (function () {
                    if (initialCapacity < 1)
                        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                    _this.queue = new Array(initialCapacity);
                })();
            }
            else if (initialCapacity === undefined) {
                var __args = Array.prototype.slice.call(arguments);
                {
                    var __args_1 = Array.prototype.slice.call(arguments);
                    var initialCapacity_1 = MPriorityQueue.DEFAULT_INITIAL_CAPACITY;
                    this.queue = null;
                    this.__size = 0;
                    this.modCount = 0;
                    this.queue = null;
                    (function () {
                        if (initialCapacity_1 < 1)
                            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                        _this.queue = new Array(initialCapacity_1);
                    })();
                }
            }
            else
                throw new Error('invalid overload');
        }
        MPriorityQueue.MAX_ARRAY_SIZE_$LI$ = function () { if (MPriorityQueue.MAX_ARRAY_SIZE == null)
            MPriorityQueue.MAX_ARRAY_SIZE = Number.MAX_VALUE - 8; return MPriorityQueue.MAX_ARRAY_SIZE; };
        ;
        /**
         * Inserts the specified element into this priority queue.
         *
         * @return {boolean} {@code true} (as specified by {@link Collection#add})
         * @throws ClassCastException   if the specified element cannot be compared with
         * elements currently in this priority queue
         * according to the priority queue's ordering
         * @throws NullPointerException if the specified element is null
         * @param {number} e
         */
        MPriorityQueue.prototype.add = function (e) {
            return this.offer(e);
        };
        /**
         * Inserts the specified element into this priority queue.
         *
         * @return {boolean} {@code true} (as specified by {@link Queue#offer})
         * @throws ClassCastException   if the specified element cannot be compared with
         * elements currently in this priority queue
         * according to the priority queue's ordering
         * @throws NullPointerException if the specified element is null
         * @param {number} e
         */
        MPriorityQueue.prototype.offer = function (e) {
            if (e == null)
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.NullPointerException', 'java.lang.Exception'] });
            this.modCount++;
            var i = this.__size;
            if (i >= this.queue.length)
                this.grow(i + 1);
            this.__size = i + 1;
            if (i === 0)
                this.queue[0] = e;
            else
                this.siftUp(i, e);
            return true;
        };
        /**
         * Increases the capacity of the array.
         *
         * @param {number} minCapacity the desired minimum capacity
         * @private
         */
        /*private*/ MPriorityQueue.prototype.grow = function (minCapacity) {
            var oldCapacity = this.queue.length;
            var newCapacity = oldCapacity + ((oldCapacity < 64) ? (oldCapacity + 2) : (oldCapacity >> 1));
            if (newCapacity - MPriorityQueue.MAX_ARRAY_SIZE_$LI$() > 0)
                newCapacity = MPriorityQueue.hugeCapacity(minCapacity);
            this.queue = this.queue.slice(0, newCapacity);
        };
        MPriorityQueue.prototype.size = function () {
            return this.__size;
        };
        /*private*/ MPriorityQueue.hugeCapacity = function (minCapacity) {
            if (minCapacity < 0)
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.VirtualMachineError', 'java.lang.Error', 'java.lang.Object', 'java.lang.OutOfMemoryError'] });
            return (minCapacity > MPriorityQueue.MAX_ARRAY_SIZE_$LI$()) ? Number.MAX_VALUE : MPriorityQueue.MAX_ARRAY_SIZE_$LI$();
        };
        /**
         * Inserts item x at position k, maintaining heap invariant by promoting x up
         * the tree until it is greater than or equal to its parent, or is the root.
         *
         * To simplify and speed up coercions and comparisons. the Comparable and
         * Comparator versions are separated into different methods that are otherwise
         * identical. (Similarly for siftDown.)
         *
         * @param {number} k the position to fill
         * @param {number} x the item to insert
         * @private
         */
        /*private*/ MPriorityQueue.prototype.siftUp = function (k, x) {
            this.siftUpComparable(k, x);
        };
        /*private*/ MPriorityQueue.prototype.siftUpComparable = function (k, x) {
            while ((k > 0)) {
                var parent_1 = (k - 1) >>> 1;
                var e = this.queue[parent_1];
                if (x - e >= 0)
                    break;
                this.queue[k] = e;
                k = parent_1;
            }
            ;
            this.queue[k] = x;
        };
        MPriorityQueue.prototype.poll = function () {
            if (this.__size === 0)
                return null;
            var s = --this.__size;
            this.modCount++;
            var result = this.queue[0];
            var x = this.queue[s];
            this.queue[s] = null;
            if (s !== 0)
                this.siftDown(0, x);
            return result;
        };
        /**
         * Inserts item x at position k, maintaining heap invariant by demoting x down
         * the tree repeatedly until it is less than or equal to its children or is a
         * leaf.
         *
         * @param {number} k the position to fill
         * @param {number} x the item to insert
         * @private
         */
        /*private*/ MPriorityQueue.prototype.siftDown = function (k, x) {
            this.siftDownComparable(k, x);
        };
        /*private*/ MPriorityQueue.prototype.siftDownComparable = function (k, x) {
            var half = this.__size >>> 1;
            while ((k < half)) {
                var child = (k << 1) + 1;
                var c = this.queue[child];
                var right = child + 1;
                if (right < this.__size && (c - this.queue[right]) > 0)
                    c = this.queue[child = right];
                if (x - c <= 0)
                    break;
                this.queue[k] = c;
                k = child;
            }
            ;
            this.queue[k] = x;
        };
        return MPriorityQueue;
    }());
    MPriorityQueue.DEFAULT_INITIAL_CAPACITY = 11;
    bc19.MPriorityQueue = MPriorityQueue;
    MPriorityQueue["__class"] = "bc19.MPriorityQueue";
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has
     * default initial capacity (16) and load factor (0.75).
     * @class
     */
    var HashSetI = (function () {
        function HashSetI() {
            this.map = null;
            this.map = new bc19.HashMapPI();
        }
        /**
         * Adds the specified element to this set if it is not already present. More
         * formally, adds the specified element <tt>e</tt> to this set if this set
         * contains no element <tt>e2</tt> such that
         * <tt>(e==null&nbsp;?&nbsp;e2==null&nbsp;:&nbsp;e.equals(e2))</tt>. If this set
         * already contains the element, the call leaves the set unchanged and returns
         * <tt>false</tt>.
         *
         * @param {bc19.Point} e element to be added to this set
         * @return {boolean} <tt>true</tt> if this set did not already contain the specified
         * element
         */
        HashSetI.prototype.add = function (e) {
            return this.map.add(e, HashSetI.PRESENT) == null;
        };
        /**
         * Returns <tt>true</tt> if this set contains no elements.
         *
         * @return {boolean} <tt>true</tt> if this set contains no elements
         */
        HashSetI.prototype.isEmpty = function () {
            return this.map.size() === 0;
        };
        /**
         * Returns the number of elements in this set (its cardinality).
         *
         * @return {number} the number of elements in this set (its cardinality)
         */
        HashSetI.prototype.size = function () {
            return this.map.size();
        };
        /**
         * Returns an iterator over the elements in this set. The elements are returned
         * in no particular order.
         *
         * @return {bc19.Point} an Iterator over the elements in this set
         * @see ConcurrentModificationException
         */
        HashSetI.prototype.getFirst = function () {
            return this.map.getFirst().getKey();
        };
        /**
         * Returns <tt>true</tt> if this set contains the specified element. More
         * formally, returns <tt>true</tt> if and only if this set contains an element
         * <tt>e</tt> such that
         * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
         *
         * @param {bc19.Point} o element whose presence in this set is to be tested
         * @return {boolean} <tt>true</tt> if this set contains the specified element
         */
        HashSetI.prototype.contains = function (o) {
            return this.map.contains(o);
        };
        /**
         * Removes the specified element from this set if it is present. More formally,
         * removes an element <tt>e</tt> such that
         * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>, if this set
         * contains such an element. Returns <tt>true</tt> if this set contained the
         * element (or equivalently, if this set changed as a result of the call). (This
         * set will not contain the element once the call returns.)
         *
         * @param {bc19.Point} o object to be removed from this set, if present
         * @return {boolean} <tt>true</tt> if the set contained the specified element
         */
        HashSetI.prototype.remove = function (o) {
            return this.map.remove(o) === HashSetI.PRESENT;
        };
        HashSetI.prototype.getList = function () {
            return this.map.getList();
        };
        return HashSetI;
    }());
    HashSetI.PRESENT = 0;
    bc19.HashSetI = HashSetI;
    HashSetI["__class"] = "bc19.HashSetI";
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * A class representing a hash map with linear probing collision handling.
     *
     * @author Christopher Tam
     *
     * @param <K> the type for the key of entries.
     * @param <V> the type for the value of entries.
     * @class
     */
    var HashMap = (function () {
        function HashMap() {
            this.table = null;
            this.__size = 0;
            this.list = null;
            this.clear();
            this.list = ([]);
        }
        HashMap.prototype.getList = function () {
            return this.list;
        };
        HashMap.prototype.getFirst = function () {
            var meo = (function (s) { return s[s.length - 1]; })(this.list);
            while ((meo != null && meo.isRemoved())) {
                /* pop */ this.list.pop();
                meo = (function (s) { return s[s.length - 1]; })(this.list);
            }
            ;
            return meo;
        };
        /**
         *
         * @param {bc19.Point} key
         * @param {number} value
         * @return {number}
         */
        HashMap.prototype.add = function (key, value) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            if (this.getNextLoadFactor() > bc19.HashMapInterface.MAX_LOAD_FACTOR) {
                this.resize();
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            var lastentry = null;
            var result = null;
            var mea = null;
            if (entry == null) {
                mea = new bc19.MapEntry(key, value);
                this.table[index] = mea;
            }
            else {
                while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(entry.getKey(), key))) {
                    lastentry = entry;
                    entry = entry.getNext();
                }
                ;
                if (entry == null) {
                    mea = new bc19.MapEntry(key, value);
                    lastentry.setNext(mea);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(entry.getKey(), key)) {
                    if (!entry.isRemoved()) {
                        result = entry.getValue();
                    }
                    entry.setRemoved(true);
                    mea = new bc19.MapEntry(key, value, entry.getNext());
                    entry = mea;
                }
            }
            if (result == null)
                this.__size++;
            /* push */ (this.list.push(mea) > 0);
            return result;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {number}
         */
        HashMap.prototype.remove = function (key) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            var lastentry = null;
            var result = null;
            while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key))) {
                lastentry = entry;
                entry = entry.getNext();
            }
            ;
            if (entry == null) {
                return null;
            }
            else if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key)) {
                if (!entry.isRemoved()) {
                    entry.setRemoved(true);
                    result = entry.getValue();
                    this.__size--;
                    if (lastentry != null)
                        lastentry.setNext(entry.getNext());
                    else
                        this.table[index] = null;
                }
                else {
                    return null;
                }
                return result;
            }
            return null;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {number}
         */
        HashMap.prototype.get = function (key) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key)))
                entry = entry.getNext();
            if (entry != null && (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key) && !entry.isRemoved())
                return entry.getValue();
            return null;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {boolean}
         */
        HashMap.prototype.contains = function (key) {
            return this.get(key) != null;
        };
        /**
         *
         */
        HashMap.prototype.clear = function () {
            this.table = new Array(bc19.HashMapInterface.STARTING_SIZE);
            this.__size = 0;
        };
        /**
         *
         * @return {number}
         */
        HashMap.prototype.size = function () {
            return this.__size;
        };
        /**
         *
         * @return {number[]}
         */
        HashMap.prototype.values = function () {
            var result = ([]);
            for (var i = 0; i < this.table.length; i++) {
                var entry = this.table[i];
                if (entry != null && !entry.isRemoved()) {
                    /* add */ (result.push(entry.getValue()) > 0);
                }
            }
            ;
            return result;
        };
        /**
         * Calculates the load factor if another element is added the HashMap.
         *
         * @return {number} Returns the load factor.
         * @private
         */
        /*private*/ HashMap.prototype.getNextLoadFactor = function () {
            return (this.__size + 1) / this.table.length;
        };
        /**
         * Doubles the size of the HashMap and inserts the elements into the new
         * @private
         */
        /*private*/ HashMap.prototype.resize = function () {
            var temp = this.table;
            this.table = new Array(temp.length * 2);
            for (var i = 0; i < temp.length; i++) {
                var entry = temp[i];
                if (entry != null && !entry.isRemoved()) {
                    var index = Math.abs(/* hashCode */ (function (o) { if (o.hashCode) {
                        return o.hashCode();
                    }
                    else {
                        return o.toString();
                    } })(entry.getKey())) % temp.length;
                    this.table[index] = entry;
                }
            }
            ;
        };
        /**
         * Gets the index of a given array-backed HashMap to add the given key.
         *
         * @param {bc19.Point} key The key to add.
         * @return {number} Returns the index to add to.
         * @private
         */
        /*private*/ HashMap.prototype.getAddIndex = function (key) {
            var index = Math.abs(/* hashCode */ (function (o) { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString();
            } })(key)) % this.table.length;
            return index;
        };
        return HashMap;
    }());
    bc19.HashMap = HashMap;
    HashMap["__class"] = "bc19.HashMap";
    HashMap["__interfaces"] = ["bc19.HashMapInterface"];
})(bc19 || (bc19 = {}));
(function (bc19) {
    /**
     * A class representing a hash map with linear probing collision handling.
     *
     * @author Christopher Tam
     *
     * @param <K> the type for the key of entries.
     * @param <V> the type for the value of entries.
     * @class
     */
    var HashMapPP = (function () {
        function HashMapPP() {
            this.table = null;
            this.__size = 0;
            this.list = null;
            this.clear();
            this.list = ([]);
        }
        HashMapPP.prototype.getList = function () {
            return this.list;
        };
        HashMapPP.prototype.getFirst = function () {
            var meo = (function (s) { return s[s.length - 1]; })(this.list);
            while ((meo != null && meo.isRemoved())) {
                /* pop */ this.list.pop();
                meo = (function (s) { return s[s.length - 1]; })(this.list);
            }
            ;
            return meo;
        };
        /**
         *
         * @param {bc19.Point} key
         * @param {bc19.Point} value
         * @return {bc19.Point}
         */
        HashMapPP.prototype.add = function (key, value) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            if (this.getNextLoadFactor() > bc19.HashMapInterfacePP.MAX_LOAD_FACTOR) {
                this.resize();
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            var lastentry = null;
            var result = null;
            var mea = null;
            if (entry == null) {
                mea = new bc19.MapEntryPP(key, value);
                this.table[index] = mea;
            }
            else {
                while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(entry.getKey(), key))) {
                    lastentry = entry;
                    entry = entry.getNext();
                }
                ;
                if (entry == null) {
                    mea = new bc19.MapEntryPP(key, value);
                    lastentry.setNext(mea);
                }
                else if ((function (o1, o2) { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(entry.getKey(), key)) {
                    if (!entry.isRemoved()) {
                        result = entry.getValue();
                    }
                    entry.setRemoved(true);
                    mea = new bc19.MapEntryPP(key, value, entry.getNext());
                    entry = mea;
                }
            }
            if (result == null)
                this.__size++;
            /* push */ (this.list.push(mea) > 0);
            return result;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {bc19.Point}
         */
        HashMapPP.prototype.remove = function (key) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            var lastentry = null;
            var result = null;
            while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key))) {
                lastentry = entry;
                entry = entry.getNext();
            }
            ;
            if (entry == null) {
                return null;
            }
            else if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key)) {
                if (!entry.isRemoved()) {
                    entry.setRemoved(true);
                    result = entry.getValue();
                    this.__size--;
                    if (lastentry != null)
                        lastentry.setNext(entry.getNext());
                    else
                        this.table[index] = null;
                }
                else {
                    return null;
                }
                return result;
            }
            return null;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {bc19.Point}
         */
        HashMapPP.prototype.get = function (key) {
            if (key == null) {
                throw Object.defineProperty(new Error("Argument cannot be null."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
            }
            var index = this.getAddIndex(key);
            var entry = this.table[index];
            while ((entry != null && !(function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key)))
                entry = entry.getNext();
            if (entry != null && (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(entry.getKey(), key) && !entry.isRemoved())
                return entry.getValue();
            return null;
        };
        /**
         *
         * @param {bc19.Point} key
         * @return {boolean}
         */
        HashMapPP.prototype.contains = function (key) {
            return this.get(key) != null;
        };
        /**
         *
         */
        HashMapPP.prototype.clear = function () {
            this.table = new Array(bc19.HashMapInterfacePP.STARTING_SIZE);
            this.__size = 0;
        };
        /**
         *
         * @return {number}
         */
        HashMapPP.prototype.size = function () {
            return this.__size;
        };
        /**
         *
         * @return {bc19.Point[]}
         */
        HashMapPP.prototype.values = function () {
            var result = ([]);
            for (var i = 0; i < this.table.length; i++) {
                var entry = this.table[i];
                if (entry != null && !entry.isRemoved()) {
                    /* add */ (result.push(entry.getValue()) > 0);
                }
            }
            ;
            return result;
        };
        /**
         * Calculates the load factor if another element is added the HashMap.
         *
         * @return {number} Returns the load factor.
         * @private
         */
        /*private*/ HashMapPP.prototype.getNextLoadFactor = function () {
            return (this.__size + 1) / this.table.length;
        };
        /**
         * Doubles the size of the HashMap and inserts the elements into the new
         * @private
         */
        /*private*/ HashMapPP.prototype.resize = function () {
            var temp = this.table;
            this.table = new Array(temp.length * 2);
            for (var i = 0; i < temp.length; i++) {
                var entry = temp[i];
                if (entry != null && !entry.isRemoved()) {
                    var index = Math.abs(/* hashCode */ (function (o) { if (o.hashCode) {
                        return o.hashCode();
                    }
                    else {
                        return o.toString();
                    } })(entry.getKey())) % temp.length;
                    this.table[index] = entry;
                }
            }
            ;
        };
        /**
         * Gets the index of a given array-backed HashMap to add the given key.
         *
         * @param {bc19.Point} key The key to add.
         * @return {number} Returns the index to add to.
         * @private
         */
        /*private*/ HashMapPP.prototype.getAddIndex = function (key) {
            var index = Math.abs(/* hashCode */ (function (o) { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString();
            } })(key)) % this.table.length;
            return index;
        };
        return HashMapPP;
    }());
    bc19.HashMapPP = HashMapPP;
    HashMapPP["__class"] = "bc19.HashMapPP";
    HashMapPP["__interfaces"] = ["bc19.HashMapInterfacePP"];
})(bc19 || (bc19 = {}));
(function (bc19) {
    var HashMapInterface;
    (function (HashMapInterface) {
        HashMapInterface.STARTING_SIZE = 10;
        HashMapInterface.MAX_LOAD_FACTOR = 0.67;
    })(HashMapInterface = bc19.HashMapInterface || (bc19.HashMapInterface = {}));
})(bc19 || (bc19 = {}));
(function (bc19) {
    var MineAction = (function (_super) {
        __extends(MineAction, _super);
        function MineAction(signal, signalRadius, logs, castleTalk) {
            var _this = _super.call(this, signal, signalRadius, logs, castleTalk) || this;
            _this.action = null;
            _this.action = "mine";
            return _this;
        }
        return MineAction;
    }(bc19.Action));
    bc19.MineAction = MineAction;
    MineAction["__class"] = "bc19.MineAction";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var ErrorAction = (function (_super) {
        __extends(ErrorAction, _super);
        function ErrorAction(error, signal, signalRadius, logs, castleTalk) {
            var _this = _super.call(this, signal, signalRadius, logs, castleTalk) || this;
            _this.error = null;
            _this.error = error.message;
            return _this;
        }
        return ErrorAction;
    }(bc19.Action));
    bc19.ErrorAction = ErrorAction;
    ErrorAction["__class"] = "bc19.ErrorAction";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var GiveAction = (function (_super) {
        __extends(GiveAction, _super);
        function GiveAction(giveKarbonite, giveFuel, dx, dy, signal, signalRadius, logs, castleTalk) {
            var _this = _super.call(this, signal, signalRadius, logs, castleTalk) || this;
            _this.action = null;
            _this.give_karbonite = 0;
            _this.give_fuel = 0;
            _this.dx = 0;
            _this.dy = 0;
            _this.action = "give";
            _this.give_karbonite = giveKarbonite;
            _this.give_fuel = giveFuel;
            _this.dx = dx;
            _this.dy = dy;
            return _this;
        }
        return GiveAction;
    }(bc19.Action));
    bc19.GiveAction = GiveAction;
    GiveAction["__class"] = "bc19.GiveAction";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var BuildAction = (function (_super) {
        __extends(BuildAction, _super);
        function BuildAction(buildUnit, dx, dy, signal, signalRadius, logs, castleTalk) {
            var _this = _super.call(this, signal, signalRadius, logs, castleTalk) || this;
            _this.action = null;
            _this.build_unit = 0;
            _this.dx = 0;
            _this.dy = 0;
            _this.action = "build";
            _this.build_unit = buildUnit;
            _this.dx = dx;
            _this.dy = dy;
            return _this;
        }
        return BuildAction;
    }(bc19.Action));
    bc19.BuildAction = BuildAction;
    BuildAction["__class"] = "bc19.BuildAction";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var TradeAction = (function (_super) {
        __extends(TradeAction, _super);
        function TradeAction(trade_fuel, trade_karbonite, signal, signalRadius, logs, castleTalk) {
            var _this = _super.call(this, signal, signalRadius, logs, castleTalk) || this;
            _this.action = null;
            _this.trade_fuel = 0;
            _this.trade_karbonite = 0;
            _this.action = "trade";
            _this.trade_fuel = trade_fuel;
            _this.trade_karbonite = trade_karbonite;
            return _this;
        }
        return TradeAction;
    }(bc19.Action));
    bc19.TradeAction = TradeAction;
    TradeAction["__class"] = "bc19.TradeAction";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var MoveAction = (function (_super) {
        __extends(MoveAction, _super);
        function MoveAction(dx, dy, signal, signalRadius, logs, castleTalk) {
            var _this = _super.call(this, signal, signalRadius, logs, castleTalk) || this;
            _this.action = null;
            _this.dx = 0;
            _this.dy = 0;
            _this.action = "move";
            _this.dx = dx;
            _this.dy = dy;
            return _this;
        }
        return MoveAction;
    }(bc19.Action));
    bc19.MoveAction = MoveAction;
    MoveAction["__class"] = "bc19.MoveAction";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var AttackAction = (function (_super) {
        __extends(AttackAction, _super);
        function AttackAction(dx, dy, signal, signalRadius, logs, castleTalk) {
            var _this = _super.call(this, signal, signalRadius, logs, castleTalk) || this;
            _this.action = null;
            _this.dx = 0;
            _this.dy = 0;
            _this.action = "attack";
            _this.dx = dx;
            _this.dy = dy;
            return _this;
        }
        return AttackAction;
    }(bc19.Action));
    bc19.AttackAction = AttackAction;
    AttackAction["__class"] = "bc19.AttackAction";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Crusader = (function (_super) {
        __extends(Crusader, _super);
        function Crusader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Crusader.turn = function (myRobot) {
            bc19.Util.setupt(myRobot);
            if (!bc19.Util.mr.lastActionDone)
                (bc19.Util.mainPath.push(Crusader.savePo) > 0);
            if (bc19.Util.dest === bc19.Util.myp) {
                bc19.Util.dest.ocastle = false;
                bc19.Util.dest = null;
            }
            var poc = Crusader.canAttack();
            if (poc != null)
                return bc19.Util.mr.attack(bc19.Util.myp.dxTo(poc), bc19.Util.myp.dyTo(poc));
            if (bc19.Util.dest == null && Crusader.lastTry + 5 <= bc19.Util.me.turn) {
                bc19.Nav.AStar();
                Crusader.lastTry = bc19.Util.me.turn;
            }
            if (bc19.Util.dest != null && bc19.Util.dest !== bc19.Util.myp) {
                var po = (function (s) { return s[s.length - 1]; })(bc19.Util.mainPath);
                if (bc19.Util.mr.getVisibleRobotMap()[po.y][po.x] === 0) {
                    /* pop */ bc19.Util.mainPath.pop();
                    Crusader.savePo = po;
                    bc19.Util.mr.log("move(t) a crusader. x: " + po.x + " y: " + po.y);
                    return bc19.Util.mr.move(bc19.Util.myp.dxTo(po), bc19.Util.myp.dyTo(po));
                }
                else {
                }
            }
            return null;
        };
        /*private*/ Crusader.canAttack = function () {
            var value = 0;
            var mx = 0;
            var po = null;
            {
                var array122 = bc19.Util.mr.getVisibleRobots();
                for (var index121 = 0; index121 < array122.length; index121++) {
                    var r = array122[index121];
                    {
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 16) {
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number())
                                value = 1;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Church].number())
                                value = 2;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Crusader].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Prophet].number())
                                value = 4;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number())
                                value = 5;
                            if (value > mx) {
                                po = bc19.Util.p[r.x][r.y];
                                mx = value;
                            }
                        }
                    }
                }
            }
            return po;
        };
        return Crusader;
    }(bc19.Util));
    Crusader.savePo = null;
    Crusader.lastTry = -5;
    bc19.Crusader = Crusader;
    Crusader["__class"] = "bc19.Crusader";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Pilgrim = (function (_super) {
        __extends(Pilgrim, _super);
        function Pilgrim() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = 0;
            return _this;
        }
        Pilgrim.turn = function (myRobot) {
            bc19.Util.setupt(myRobot);
            if (bc19.Util.me.turn === 1) {
                {
                    var array124 = bc19.Util.mr.getVisibleRobots();
                    for (var index123 = 0; index123 < array124.length; index123++) {
                        var r = array124[index123];
                        if (bc19.Util.mr.isVisible(r) && r.team === bc19.Team["_$wrappers"][bc19.Util.teami].number() && r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number()) {
                            /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                s.push(e);
                                return true;
                            }
                            else {
                                return false;
                            } })(bc19.Util.castlei_$LI$(), bc19.Util.p[r.x][r.y]);
                            bc19.Util.p[r.x][r.y].icastle = true;
                            if (bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 2) {
                                bc19.Util.myCastle = bc19.Util.p[r.x][r.y];
                            }
                        }
                    }
                }
            }
            bc19.Communication.turn();
            bc19.Communication.signalInPilgrim();
            bc19.Communication.castleOut();
            Pilgrim.checkFight();
            if (Pilgrim.scouting) {
                if (Pilgrim.dangerEnemy == null && Pilgrim.attackTarget != null) {
                    if (bc19.Util.mr.getRobot(bc19.Util.mr.getVisibleRobotMap()[Pilgrim.attackTarget.y][Pilgrim.attackTarget.x]).unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number()) {
                        var value = void 0;
                        var mx = 0;
                        for (var index125 = 0; index125 < Pilgrim.seenFriend.length; index125++) {
                            var po = Pilgrim.seenFriend[index125];
                            {
                                if (bc19.Util.mr.getRobot(bc19.Util.mr.getVisibleRobotMap()[Pilgrim.attackTarget.y][Pilgrim.attackTarget.x]).unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number() && mx < bc19.Util.myp.dist2(po) && po.dist2(Pilgrim.attackTarget) <= 64) {
                                    mx = bc19.Util.myp.dist2(po);
                                }
                            }
                        }
                        value = Pilgrim.attackTarget.x + Pilgrim.attackTarget.y * bc19.Util.size + (5) * bc19.Util.size * bc19.Util.size;
                        bc19.Util.mr.signal(value, mx);
                    }
                }
                else if (Pilgrim.dangerEnemy == null && Pilgrim.attackTarget == null) {
                    if (!bc19.Util.mr.lastActionDone)
                        (bc19.Util.mainPath.push(Pilgrim.savePo) > 0);
                    if (bc19.Util.dest === bc19.Util.myp) {
                        bc19.Util.dest.ocastle = false;
                        bc19.Util.dest = null;
                    }
                    if (bc19.Util.dest == null && Pilgrim.lastTry + 5 <= bc19.Util.me.turn) {
                        bc19.Util.mainPath = bc19.Nav.AStar();
                        Pilgrim.lastTry = bc19.Util.me.turn;
                    }
                    if (bc19.Util.dest != null && bc19.Util.dest !== bc19.Util.myp) {
                        var po = (function (s) { return s[s.length - 1]; })(bc19.Util.mainPath);
                        if (Pilgrim.canReach(po)) {
                            /* pop */ bc19.Util.mainPath.pop();
                            Pilgrim.savePo = po;
                            bc19.Util.mr.log("move(1) a pilgrim. x: " + po.x + " y: " + po.y);
                            return bc19.Util.mr.move(bc19.Util.myp.dxTo(po), bc19.Util.myp.dyTo(po));
                        }
                        else {
                            bc19.Util.mr.log("HERE0");
                            if (bc19.Util.mainPath.length === 1) {
                                bc19.Util.mr.log("HERE1");
                                var xx = bc19.Util.myp.x + (bc19.Util.myp.dxTo(po) / 2 | 0);
                                var yy = bc19.Util.myp.y + (bc19.Util.myp.dyTo(po) / 2 | 0);
                                if (Pilgrim.canReach(bc19.Util.p[xx][yy])) {
                                    bc19.Util.mr.log("move(2) a pilgrim. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                    return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                                }
                            }
                            else {
                                bc19.Util.mr.log("HERE2");
                                /* pop */ bc19.Util.mainPath.pop();
                                var poo = (function (s) { return s[s.length - 1]; })(bc19.Util.mainPath);
                                var xx = bc19.Util.myp.x + po.dxTo(poo);
                                var yy = bc19.Util.myp.y + po.dyTo(poo);
                                if (Pilgrim.canReach(bc19.Util.p[xx][yy])) {
                                    bc19.Util.mr.log("move(3) a pilgrim. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                    return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                                }
                                else {
                                    bc19.Util.mr.log("HERE4");
                                    xx = bc19.Util.myp.x + (bc19.Util.myp.dxTo(po) / 2 | 0);
                                    yy = bc19.Util.myp.y + (bc19.Util.myp.dyTo(po) / 2 | 0);
                                    if (Pilgrim.canReach(bc19.Util.p[xx][yy])) {
                                        bc19.Util.mr.log("move(4) a pilgrim. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                        /* push */ (bc19.Util.mainPath.push(po) > 0);
                                        return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                                    }
                                    bc19.Util.mr.log("HERE5");
                                }
                            }
                        }
                    }
                }
                else {
                    Pilgrim.justRunAway();
                    if (Pilgrim.runAway != null) {
                        bc19.Util.mr.log("move(5) a pilgrim. x: " + Pilgrim.runAway.x + " y: " + Pilgrim.runAway.y);
                        return bc19.Util.mr.move(bc19.Util.myp.dxTo(Pilgrim.runAway), bc19.Util.myp.dyTo(Pilgrim.runAway));
                    }
                    else if (Pilgrim.attackTarget != null) {
                        bc19.Util.mr.log("attack and die by a pilgrim. x: " + Pilgrim.attackTarget.x + " y: " + Pilgrim.attackTarget.y);
                    }
                }
                return null;
            }
            else {
                if (Pilgrim.dangerEnemy != null) {
                    Pilgrim.justRunAway();
                    if (Pilgrim.runAway != null) {
                        bc19.Util.mr.log("move(5) a pilgrim. x: " + Pilgrim.runAway.x + " y: " + Pilgrim.runAway.y);
                        return bc19.Util.mr.move(bc19.Util.myp.dxTo(Pilgrim.runAway), bc19.Util.myp.dyTo(Pilgrim.runAway));
                    }
                    else if (Pilgrim.attackTarget != null) {
                        bc19.Util.mr.log("attack and die by a pilgrim. x: " + Pilgrim.attackTarget.x + " y: " + Pilgrim.attackTarget.y);
                    }
                }
                else {
                    if (!bc19.Util.mr.lastActionDone)
                        (bc19.Util.mainPath.push(Pilgrim.savePo) > 0);
                    if (bc19.Util.dest === bc19.Util.myp)
                        bc19.Util.dest = null;
                    if (Pilgrim.canMine()) {
                        bc19.Util.mr.log("mine " + (bc19.Util.myp.karbonite ? " Karbonite" : " Feul"));
                        return bc19.Util.mr.mine();
                    }
                    var gdir = Pilgrim.canGive();
                    if (gdir != null)
                        return bc19.Util.mr.give(bc19.Util.dx(gdir), bc19.Util.dy(gdir), bc19.Util.me.karbonite, bc19.Util.me.fuel);
                    if ((bc19.Util.dest == null || Pilgrim.recalc % 4 === 3) && Pilgrim.lastTry + 5 <= bc19.Util.me.turn) {
                        Pilgrim.recalc = 0;
                        Pilgrim.lastTryc = bc19.Util.me.turn;
                        if (bc19.Util.me.karbonite === 20 || bc19.Util.me.fuel === 100)
                            bc19.Util.mainPath = bc19.Nav.backResourceToCC();
                        else
                            bc19.Util.mainPath = bc19.Nav.destSetPilgrimToResource();
                    }
                    if (bc19.Util.dest != null && bc19.Util.dest !== bc19.Util.myp) {
                        var po = (function (s) { return s[s.length - 1]; })(bc19.Util.mainPath);
                        if (Pilgrim.canReach(po)) {
                            /* pop */ bc19.Util.mainPath.pop();
                            Pilgrim.savePo = po;
                            Pilgrim.recalc = 0;
                            bc19.Util.mr.log("move(t) a pilgram. x: " + po.x + " y: " + po.y);
                            return bc19.Util.mr.move(bc19.Util.myp.dxTo(po), bc19.Util.myp.dyTo(po));
                        }
                        else {
                            ++Pilgrim.recalc;
                        }
                    }
                }
            }
            return null;
        };
        /*private*/ Pilgrim.justRunAway = function () {
            Pilgrim.runAway = null;
            {
                var array127 = function () { var result = []; for (var val in bc19.Direction4) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (var index126 = 0; index126 < array127.length; index126++) {
                    var dir = array127[index126];
                    {
                        var po = bc19.Util.myp.dir4To(dir);
                        if (po != null && po.passable && bc19.Util.mr.getVisibleRobotMap()[po.y][po.x] === 0 && po.dist2(Pilgrim.dangerEnemy) > bc19.Util.mr.SPECS.UNITS[bc19.Util.mr.getRobot(Pilgrim.dangerEnemyId).unit].VISION_RADIUS) {
                            Pilgrim.runAway = po;
                            break;
                        }
                    }
                }
            }
            {
                var array129 = function () { var result = []; for (var val in bc19.Direction4) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (var index128 = 0; index128 < array129.length; index128++) {
                    var dir = array129[index128];
                    {
                        var po = bc19.Util.myp.dir4To(dir);
                        if (po != null && po.passable && bc19.Util.mr.getVisibleRobotMap()[po.y][po.x] === 0 && po.dist2(Pilgrim.dangerEnemy) > bc19.Util.mr.SPECS.UNITS[bc19.Util.mr.getRobot(Pilgrim.dangerEnemyId).unit].ATTACK_RADIUS[1]) {
                            Pilgrim.runAway = po;
                            break;
                        }
                    }
                }
            }
        };
        /*private*/ Pilgrim.canReach = function (po) {
            if (bc19.Util.myp.dist2(po) <= 4 && bc19.Util.mr.getVisibleRobotMap()[po.y][po.x] === 0 && po.passable)
                return true;
            return false;
        };
        /*private*/ Pilgrim.scout = function () {
            if (bc19.Util.mainPath == null)
                bc19.Util.mainPath = bc19.Nav.AStar();
        };
        /*private*/ Pilgrim.checkFight = function () {
            Pilgrim.seenFriend = ([]);
            Pilgrim.dangerEnemyId = -1;
            var value = 0;
            var mx = 0;
            var mn = 10000;
            var po = null;
            var poo = null;
            {
                var array131 = bc19.Util.mr.getVisibleRobots();
                for (var index130 = 0; index130 < array131.length; index130++) {
                    var r = array131[index130];
                    {
                        if (!bc19.Util.mr.isVisible(r))
                            continue;
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 100) {
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number())
                                value = 1;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Church].number())
                                value = 2;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Crusader].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Prophet].number())
                                value = 4;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number())
                                value = 5;
                            if (value > mx) {
                                po = bc19.Util.p[r.x][r.y];
                                mx = value;
                            }
                        }
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= bc19.Util.mr.SPECS.UNITS[r.unit].VISION_RADIUS) {
                            if (mn > bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y])) {
                                poo = bc19.Util.p[r.x][r.y];
                                Pilgrim.dangerEnemyId = r.id;
                                mn = bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]);
                            }
                        }
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teami].number() && bc19.Util.p[r.x][r.y] !== bc19.Util.myp) {
                            /* add */ (Pilgrim.seenFriend.push(bc19.Util.p[r.x][r.y]) > 0);
                        }
                    }
                }
            }
            Pilgrim.attackTarget = po;
            Pilgrim.dangerEnemy = poo;
        };
        /*private*/ Pilgrim.canGive = function () {
            {
                var array133 = function () { var result = []; for (var val in bc19.Direction) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (var index132 = 0; index132 < array133.length; index132++) {
                    var dir = array133[index132];
                    {
                        var p2 = bc19.Util.myp.dirTo(dir);
                        if (p2 != null && bc19.Util.p[p2.x][p2.y].passable && bc19.Util.mr.getVisibleRobotMap()[p2.y][p2.x] > 0 && (bc19.Util.mr.getRobot(bc19.Util.mr.getVisibleRobotMap()[p2.y][p2.x]).unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number() || bc19.Util.mr.getRobot(bc19.Util.mr.getVisibleRobotMap()[p2.y][p2.x]).unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Church].number()) && (bc19.Util.me.karbonite === 20 || bc19.Util.me.fuel === 100)) {
                            return dir;
                        }
                    }
                }
            }
            return null;
        };
        /*private*/ Pilgrim.canMove = function () {
            var rnd = bc19.FastMath.rand256() % 7;
            var ddir = null;
            {
                var array135 = function () { var result = []; for (var val in bc19.Direction) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (var index134 = 0; index134 < array135.length; index134++) {
                    var dir = array135[index134];
                    {
                        var p2 = bc19.Util.myp.dirTo(dir);
                        if (p2 != null && bc19.Util.p[p2.x][p2.y].passable && bc19.Util.mr.getVisibleRobotMap()[p2.y][p2.x] === 0) {
                            ddir = dir;
                            if (rnd === 0)
                                break;
                            --rnd;
                        }
                    }
                }
            }
            return ddir;
        };
        /*private*/ Pilgrim.canMine = function () {
            return (bc19.Util.myp.karbonite && bc19.Util.me.karbonite !== 20) || (bc19.Util.myp.fuel && bc19.Util.me.fuel !== 100);
        };
        return Pilgrim;
    }(bc19.Util));
    Pilgrim.savePo = null;
    Pilgrim.recalc = 0;
    Pilgrim.lastTry = -5;
    Pilgrim.lastTryc = -5;
    Pilgrim.scouting = false;
    Pilgrim.attackTarget = null;
    Pilgrim.dangerEnemy = null;
    Pilgrim.dangerEnemyId = -1;
    Pilgrim.runAway = null;
    Pilgrim.seenFriend = null;
    bc19.Pilgrim = Pilgrim;
    Pilgrim["__class"] = "bc19.Pilgrim";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Castle = (function (_super) {
        __extends(Castle, _super);
        function Castle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Castle.turn = function (myRobot) {
            bc19.Util.setupt(myRobot);
            if (bc19.Util.me.turn === 1) {
                for (var i = 0; i < bc19.Util.size; ++i)
                    for (var j = 0; j < bc19.Util.size; ++j) {
                        if (bc19.Util.p[i][j].fuel)
                            (function (s, e) { if (s.indexOf(e) == -1) {
                                s.push(e);
                                return true;
                            }
                            else {
                                return false;
                            } })(bc19.Util.fuelP_$LI$(), bc19.Util.p[i][j]);
                        if (bc19.Util.p[i][j].karbonite)
                            (function (s, e) { if (s.indexOf(e) == -1) {
                                s.push(e);
                                return true;
                            }
                            else {
                                return false;
                            } })(bc19.Util.karbonP_$LI$(), bc19.Util.p[i][j]);
                        if (bc19.Util.myp.distxy(bc19.Util.p[i][j]) <= 8 && (bc19.Util.p[i][j].fuel || bc19.Util.p[i][j].karbonite))
                            (function (s, e) { if (s.indexOf(e) == -1) {
                                s.push(e);
                                return true;
                            }
                            else {
                                return false;
                            } })(bc19.Util.resGoalP_$LI$(), bc19.Util.p[i][j]);
                    }
                ;
                ;
            }
            Castle.wave = 0;
            if (Castle.pre !== 0 && Castle.pre % 4 === 0 && !Castle.vwave) {
                Castle.wave = 4;
                Castle.vwave = true;
            }
            else if (Castle.pre % 4 !== 0) {
                Castle.vwave = false;
            }
            bc19.Communication.turn();
            bc19.Communication.castleInCastle();
            bc19.Communication.castleOut();
            bc19.Communication.signalOutCastle();
            bc19.Communication.signalOut();
            Castle.checkFight();
            if (Castle.attackTarget != null) {
                bc19.Util.mr.log("attack by a castle. x: " + Castle.attackTarget.x + " y: " + Castle.attackTarget.y);
                return bc19.Util.mr.attack(bc19.Util.myp.dxTo(Castle.attackTarget), bc19.Util.myp.dyTo(Castle.attackTarget));
            }
            else {
                Castle.ut = Castle.nextUnit();
                if (Castle.ut != null && bc19.Util.mr.karbonite >= bc19.Util.mr.SPECS.UNITS[bc19.UnitType["_$wrappers"][Castle.ut].number()].CONSTRUCTION_KARBONITE && bc19.Util.mr.fuel >= bc19.Util.mr.SPECS.UNITS[bc19.UnitType["_$wrappers"][Castle.ut].number()].CONSTRUCTION_FUEL && Castle.canProduceUnit() != null) {
                    Castle.assign();
                    if (Castle.assignNode == null) {
                        bc19.Util.mr.log("Building a" + Castle.ut + " . dir : " + Castle.assignDir);
                        if (Castle.ut === bc19.UnitType.Pilgrim)
                            Castle.pil++;
                        else if (Castle.ut === bc19.UnitType.Preacher)
                            Castle.pre++;
                        return bc19.Util.mr.buildUnit(bc19.UnitType["_$wrappers"][Castle.ut].number(), bc19.Util.dx(Castle.assignDir), bc19.Util.dy(Castle.assignDir));
                    }
                    else {
                        bc19.Util.mr.log("Building a" + Castle.ut + " . point : " + Castle.assignNode);
                        if (Castle.ut === bc19.UnitType.Pilgrim)
                            Castle.pil++;
                        else if (Castle.ut === bc19.UnitType.Preacher)
                            Castle.pre++;
                        return bc19.Util.mr.buildUnit(bc19.UnitType["_$wrappers"][Castle.ut].number(), bc19.Util.myp.dxTo(Castle.assignNode), bc19.Util.myp.dyTo(Castle.assignNode));
                    }
                }
            }
            return null;
        };
        /*private*/ Castle.assign = function () {
            Castle.assignDir = Castle.canProduceUnit();
            Castle.assignNode = null;
            if (Castle.ut === bc19.UnitType.Pilgrim && bc19.Util.me.turn < 100) {
                bc19.Util.mainPath = bc19.Nav.nextAssignRes();
                if (bc19.Util.mainPath.length !== 0) {
                    Castle.assignNode = bc19.Util.mainPath.pop();
                }
            }
            else if (Castle.ut === bc19.UnitType.Preacher) {
            }
        };
        /*private*/ Castle.nextUnit = function () {
            if (bc19.Util.me.turn < 5) {
                if (bc19.Util.mr.karbonite === 100)
                    return bc19.UnitType.Preacher;
                if (bc19.Util.mr.karbonite === 70)
                    return bc19.UnitType.Preacher;
            }
            if (Castle.pil < bc19.Util.resGoalP_$LI$().length)
                return bc19.UnitType.Pilgrim;
            if (bc19.Util.me.turn >= 20) {
                if (bc19.Util.mr.karbonite >= bc19.Util.mr.SPECS.UNITS[bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number()].CONSTRUCTION_KARBONITE * 2 && bc19.Util.mr.fuel >= bc19.Util.mr.SPECS.UNITS[bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number()].CONSTRUCTION_FUEL * 2)
                    return bc19.UnitType.Preacher;
            }
            return null;
        };
        /*private*/ Castle.checkFight = function () {
            Castle.seenFriend = ([]);
            var value = 0;
            var mx = 0;
            var mn = 10000;
            var po = null;
            var poo = null;
            {
                var array137 = bc19.Util.mr.getVisibleRobots();
                for (var index136 = 0; index136 < array137.length; index136++) {
                    var r = array137[index136];
                    {
                        if (!bc19.Util.mr.isVisible(r))
                            continue;
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 64) {
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number())
                                value = 1;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Church].number())
                                value = 2;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Crusader].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Prophet].number())
                                value = 4;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number())
                                value = 5;
                            if (value > mx) {
                                po = bc19.Util.p[r.x][r.y];
                                mx = value;
                            }
                        }
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 100) {
                            if (mn > bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y])) {
                                poo = bc19.Util.p[r.x][r.y];
                                mn = bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]);
                            }
                        }
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teami].number() && bc19.Util.p[r.x][r.y] !== bc19.Util.myp) {
                            /* add */ (Castle.seenFriend.push(bc19.Util.p[r.x][r.y]) > 0);
                        }
                    }
                }
            }
            Castle.attackTarget = po;
            Castle.dangerEnemy = poo;
        };
        /*private*/ Castle.build3Pre1Pil = function (dir) {
            if (bc19.Util.mr.karbonite >= 30) {
                bc19.Util.mr.log("Building a Preacher. dir : " + dir);
                return bc19.Util.mr.buildUnit(bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number(), bc19.Util.dx(dir), bc19.Util.dy(dir));
            }
            else if (bc19.Util.mr.karbonite >= 10) {
                bc19.Util.mr.log("Building a pilgrim. dir : " + dir);
                return bc19.Util.mr.buildUnit(bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number(), bc19.Util.dx(dir), bc19.Util.dy(dir));
            }
            return null;
        };
        /*private*/ Castle.build4Cru1Pil = function (dir) {
            if (bc19.Util.mr.karbonite >= 20) {
                bc19.Util.mr.log("Building a Crusader. dir : " + dir);
                return bc19.Util.mr.buildUnit(bc19.UnitType["_$wrappers"][bc19.UnitType.Crusader].number(), bc19.Util.dx(dir), bc19.Util.dy(dir));
            }
            else if (bc19.Util.mr.karbonite >= 10) {
                bc19.Util.mr.log("Building a pilgrim. dir : " + dir);
                return bc19.Util.mr.buildUnit(bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number(), bc19.Util.dx(dir), bc19.Util.dy(dir));
            }
            return null;
        };
        /*private*/ Castle.build4Pro = function (dir) {
            if (bc19.Util.mr.karbonite >= 25) {
                bc19.Util.mr.log("Building a Prophet. dir : " + dir);
                return bc19.Util.mr.buildUnit(bc19.UnitType["_$wrappers"][bc19.UnitType.Prophet].number(), bc19.Util.dx(dir), bc19.Util.dy(dir));
            }
            else if (bc19.Util.mr.karbonite >= 10) {
                bc19.Util.mr.log("Building a pilgrim. dir : " + dir);
                return bc19.Util.mr.buildUnit(bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number(), bc19.Util.dx(dir), bc19.Util.dy(dir));
            }
            return null;
        };
        /*private*/ Castle.canProduceUnit = function () {
            var p1 = bc19.Util.p[bc19.Util.me.x][bc19.Util.me.y];
            {
                var array139 = function () { var result = []; for (var val in bc19.Direction) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (var index138 = 0; index138 < array139.length; index138++) {
                    var dir = array139[index138];
                    {
                        var p2 = p1.dirTo(dir);
                        if (p2 != null && bc19.Util.p[p2.x][p2.y].passable && bc19.Util.mr.getVisibleRobotMap()[p2.y][p2.x] === 0) {
                            return dir;
                        }
                    }
                }
            }
            return null;
        };
        /*private*/ Castle.produceNewUnit = function (unitType) {
            var p1 = bc19.Util.p[bc19.Util.me.x][bc19.Util.me.y];
            {
                var array141 = function () { var result = []; for (var val in bc19.Direction) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (var index140 = 0; index140 < array141.length; index140++) {
                    var dir = array141[index140];
                    {
                        var p2 = p1.dirTo(dir);
                        if (p2 != null && bc19.Util.p[p2.x][p2.y].passable && bc19.Util.mr.getVisibleRobotMap()[p2.y][p2.x] === 0) {
                            bc19.Util.mr.log("Building a pilgrim. x : " + p2.x + " y : " + p2.y);
                            return bc19.Util.mr.buildUnit(unitType, bc19.Util.dx(dir), bc19.Util.dy(dir));
                        }
                    }
                }
            }
            return null;
        };
        /*private*/ Castle.tellAboutResource = function () {
        };
        return Castle;
    }(bc19.Util));
    Castle.attackTarget = null;
    Castle.dangerEnemy = null;
    Castle.runAway = null;
    Castle.seenFriend = null;
    Castle.assignDir = null;
    Castle.pil = 0;
    Castle.pre = 0;
    Castle.ut = null;
    Castle.assignNode = null;
    Castle.wave = 0;
    Castle.vwave = false;
    bc19.Castle = Castle;
    Castle["__class"] = "bc19.Castle";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Communication = (function (_super) {
        __extends(Communication, _super);
        function Communication() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Communication.turn = function () {
            Communication.cmessage = 0;
            Communication.maxSignalRange = 0;
            Communication.maxSignalRangeM = 0;
        };
        Communication.castleInCastle = function () {
            {
                var array143 = bc19.Util.mr.getVisibleRobots();
                for (var index142 = 0; index142 < array143.length; index142++) {
                    var r = array143[index142];
                    {
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teami].number()) {
                            bc19.Util.mr.log("ez :" + r.id + " - " + r.castle_talk);
                            if (!bc19.Util.mr.isVisible(r) || r.x !== bc19.Util.myp.x || r.y !== bc19.Util.myp.y)
                                Communication.handleCastleIn(r);
                        }
                    }
                }
            }
            if (bc19.Util.me.turn === 1) {
                Communication.cmessage = bc19.Util.myp.x * 4 + 1;
            }
            else if (bc19.Util.me.turn === 2) {
                Communication.cmessage = bc19.Util.myp.y * 4 + 1;
            }
        };
        /*private*/ Communication.handleCastleIn = function (r) {
            var opcode = Communication.decode(r.castle_talk, 0, 2);
            if (opcode === 1) {
                if (bc19.Util.me.turn === 1) {
                    /* put */ (function (m, k, v) { if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            m.entries[i].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(bc19.Util.xid_$LI$(), r.id, Communication.decode(r.castle_talk, 2, 8));
                }
                else if (bc19.Util.me.turn === 2) {
                    if ((function (m, k) { if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            return true;
                        } return false; })(bc19.Util.xid_$LI$(), r.id))
                        (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(bc19.Util.yid_$LI$(), r.id, Communication.decode(r.castle_talk, 2, 8));
                    else
                        (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(bc19.Util.xid_$LI$(), r.id, Communication.decode(r.castle_talk, 2, 8));
                }
                else if (bc19.Util.me.turn === 3) {
                    /* put */ (function (m, k, v) { if (m.entries == null)
                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            m.entries[i].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(bc19.Util.yid_$LI$(), r.id, Communication.decode(r.castle_talk, 2, 8));
                }
            }
            else if (opcode === 0) {
                if (Communication.decode(r.castle_talk, 0, 4) === 4 * 1) {
                    if (bc19.Util.me.turn >= 3) {
                        if ((function (m) { if (m.entries == null)
                            m.entries = []; return m.entries.length; })(bc19.Util.xid_$LI$()) + 1 !== Communication.decode(r.castle_talk, 4, 6)) {
                            if (bc19.Util.mr.isVisible(r) && bc19.Util.p[r.x][r.y].dist2(bc19.Util.myp) <= 100 && bc19.Util.p[r.x][r.y].dist2(bc19.Util.myp) > Communication.maxSignalRange) {
                                Communication.maxSignalRange = bc19.Util.p[r.x][r.y].dist2(bc19.Util.myp);
                            }
                        }
                        else {
                            if (bc19.Util.mr.isVisible(r) && bc19.Util.p[r.x][r.y].dist2(bc19.Util.myp) <= 100 && bc19.Util.p[r.x][r.y].dist2(bc19.Util.myp) > Communication.maxSignalRangeM) {
                                Communication.maxSignalRangeM = bc19.Util.p[r.x][r.y].dist2(bc19.Util.myp);
                            }
                        }
                    }
                }
                else if (Communication.decode(r.castle_talk, 0, 4) === 4 * 2) {
                }
            }
        };
        /*private*/ Communication.decode = function (code, start, end) {
            return ((code / (Math.pow(2, start) | 0) | 0)) % (Math.pow(2, end - start) | 0);
        };
        /*private*/ Communication.encode = function (code, start, end) {
            Communication.cmessage = Communication.cmessage + (code - Communication.decode(Communication.cmessage, start, end)) * (Math.pow(2, start) | 0);
        };
        Communication.signalInPreacher = function () {
            Communication.encode(/* size */ bc19.Util.castlei_$LI$().length * 16 + 1 * 4, 0, 6);
            bc19.Preacher.stopCommand = false;
            {
                var array145 = bc19.Util.mr.getVisibleRobots();
                for (var index144 = 0; index144 < array145.length; index144++) {
                    var r = array145[index144];
                    {
                        if (!bc19.Util.mr.isRadioing(r) || (bc19.Util.mr.isVisible(r) && bc19.Util.mr.getRobot(r.id).team !== bc19.Team["_$wrappers"][bc19.Util.teami].number()))
                            continue;
                        Communication.handleSignalInPreacher(r);
                        bc19.Util.mr.log("sz :" + r.id + " - " + r.signal);
                    }
                }
            }
        };
        /*private*/ Communication.handleSignalInPreacher = function (r) {
            var opcode = Communication.decode(r.signal, 0, 4);
            if (opcode === 5) {
                bc19.Preacher.stopCommand = true;
            }
            else if (opcode === 6) {
                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                    s.push(e);
                    return true;
                }
                else {
                    return false;
                } })(bc19.Util.castlei_$LI$(), bc19.Util.p[Communication.decode(r.signal, 10, 16)][Communication.decode(r.signal, 4, 10)]);
                bc19.Util.p[r.x][r.y].icastle = true;
                if (bc19.Preacher.mode === 0)
                    Communication.encode(/* size */ bc19.Util.castlei_$LI$().length * 16 + 1 * 4, 0, 6);
                else
                    Communication.encode(/* size */ bc19.Util.castlei_$LI$().length * 16 + 2 * 4, 0, 6);
            }
            else if (opcode === 7) {
                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                    s.push(e);
                    return true;
                }
                else {
                    return false;
                } })(bc19.Util.castlei_$LI$(), bc19.Util.p[Communication.decode(r.signal, 10, 16)][Communication.decode(r.signal, 4, 10)]);
                bc19.Util.p[r.x][r.y].icastle = true;
                Communication.encode(/* size */ bc19.Util.castlei_$LI$().length * 16 + 2 * 4, 0, 6);
                bc19.Preacher.mode = 1;
            }
            else if (opcode === 8) {
                Communication.encode(/* size */ bc19.Util.castlei_$LI$().length * 16 + 2 * 4, 0, 6);
                bc19.Preacher.mode = 1;
            }
        };
        Communication.signalOutCastle = function () {
            if (Communication.maxSignalRangeM !== 0 && bc19.Castle.wave !== 0) {
                if (Communication.maxSignalRange === 0) {
                    Communication.smessage = 8;
                }
                else {
                    if ((function (m) { if (m.entries == null)
                        m.entries = []; return m.entries.length; })(bc19.Util.xid_$LI$()) === 2) {
                        var t = bc19.Util.me.turn % 2;
                        {
                            var array147 = (function (m) { var r = []; if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                r.push(m.entries[i].key); return r; })(bc19.Util.xid_$LI$());
                            for (var index146 = 0; index146 < array147.length; index146++) {
                                var id = array147[index146];
                                {
                                    if (t === 0) {
                                        Communication.smessage = (function (m, k) { if (m.entries == null)
                                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                                return m.entries[i].value;
                                            } return null; })(bc19.Util.xid_$LI$(), id) * (Math.pow(2, 10) | 0) + (function (m, k) { if (m.entries == null)
                                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                                return m.entries[i].value;
                                            } return null; })(bc19.Util.yid_$LI$(), id) * (Math.pow(2, 4) | 0) + 7;
                                        break;
                                    }
                                    t--;
                                }
                            }
                        }
                    }
                    else if ((function (m) { if (m.entries == null)
                        m.entries = []; return m.entries.length; })(bc19.Util.xid_$LI$()) === 1) {
                        {
                            var array149 = (function (m) { var r = []; if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                r.push(m.entries[i].key); return r; })(bc19.Util.xid_$LI$());
                            for (var index148 = 0; index148 < array149.length; index148++) {
                                var id = array149[index148];
                                {
                                    Communication.smessage = (function (m, k) { if (m.entries == null)
                                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                            return m.entries[i].value;
                                        } return null; })(bc19.Util.xid_$LI$(), id) * (Math.pow(2, 10) | 0) + (function (m, k) { if (m.entries == null)
                                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                            return m.entries[i].value;
                                        } return null; })(bc19.Util.yid_$LI$(), id) * (Math.pow(2, 4) | 0) + 7;
                                }
                            }
                        }
                    }
                }
            }
            else {
                if (Communication.maxSignalRange === 0)
                    return;
                if ((function (m) { if (m.entries == null)
                    m.entries = []; return m.entries.length; })(bc19.Util.xid_$LI$()) === 2) {
                    var t = bc19.Util.me.turn % 2;
                    {
                        var array151 = (function (m) { var r = []; if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            r.push(m.entries[i].key); return r; })(bc19.Util.xid_$LI$());
                        for (var index150 = 0; index150 < array151.length; index150++) {
                            var id = array151[index150];
                            {
                                if (t === 0) {
                                    Communication.smessage = (function (m, k) { if (m.entries == null)
                                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                            return m.entries[i].value;
                                        } return null; })(bc19.Util.xid_$LI$(), id) * (Math.pow(2, 10) | 0) + (function (m, k) { if (m.entries == null)
                                        m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                        if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                            return m.entries[i].value;
                                        } return null; })(bc19.Util.yid_$LI$(), id) * (Math.pow(2, 4) | 0) + 6;
                                    break;
                                }
                                t--;
                            }
                        }
                    }
                }
                else if ((function (m) { if (m.entries == null)
                    m.entries = []; return m.entries.length; })(bc19.Util.xid_$LI$()) === 1) {
                    {
                        var array153 = (function (m) { var r = []; if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            r.push(m.entries[i].key); return r; })(bc19.Util.xid_$LI$());
                        for (var index152 = 0; index152 < array153.length; index152++) {
                            var id = array153[index152];
                            {
                                Communication.smessage = (function (m, k) { if (m.entries == null)
                                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                    if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                        return m.entries[i].value;
                                    } return null; })(bc19.Util.xid_$LI$(), id) * (Math.pow(2, 10) | 0) + (function (m, k) { if (m.entries == null)
                                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                    if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                        return m.entries[i].value;
                                    } return null; })(bc19.Util.yid_$LI$(), id) * (Math.pow(2, 4) | 0) + 6;
                            }
                        }
                    }
                }
            }
        };
        Communication.castleOut = function () {
            bc19.Util.mr.castleTalk(Communication.cmessage);
        };
        Communication.signalOut = function () {
            if (Communication.maxSignalRangeM !== 0 && bc19.Castle.wave !== 0) {
                bc19.Util.mr.signal(Communication.smessage, Math.max(Communication.maxSignalRangeM, Communication.maxSignalRange));
                bc19.Util.mr.log("signal : " + Communication.smessage + " - " + Math.max(Communication.maxSignalRangeM, Communication.maxSignalRange));
            }
            else if (Communication.maxSignalRange !== 0) {
                bc19.Util.mr.signal(Communication.smessage, Communication.maxSignalRange);
                bc19.Util.mr.log("signal : " + Communication.smessage + " - " + Communication.maxSignalRange);
            }
        };
        Communication.signalInPilgrim = function () {
            Communication.encode(/* size */ bc19.Util.castlei_$LI$().length * 16 + 1 * 4, 0, 6);
            bc19.Preacher.stopCommand = false;
            {
                var array155 = bc19.Util.mr.getVisibleRobots();
                for (var index154 = 0; index154 < array155.length; index154++) {
                    var r = array155[index154];
                    {
                        if (!bc19.Util.mr.isRadioing(r) || (bc19.Util.mr.isVisible(r) && bc19.Util.mr.getRobot(r.id).team !== bc19.Team["_$wrappers"][bc19.Util.teami].number()))
                            continue;
                        Communication.handleSignalInPilgrim(r);
                        bc19.Util.mr.log("sz :" + r.id + " - " + r.signal);
                    }
                }
            }
        };
        /*private*/ Communication.handleSignalInPilgrim = function (r) {
            var opcode = Communication.decode(r.signal, 0, 4);
            if (opcode === 5) {
            }
            else if (opcode === 6) {
                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                    s.push(e);
                    return true;
                }
                else {
                    return false;
                } })(bc19.Util.castlei_$LI$(), bc19.Util.p[Communication.decode(r.signal, 10, 16)][Communication.decode(r.signal, 4, 10)]);
                bc19.Util.p[r.x][r.y].icastle = true;
                Communication.encode(/* size */ bc19.Util.castlei_$LI$().length * 16 + 1 * 4, 0, 6);
            }
        };
        return Communication;
    }(bc19.Util));
    Communication.cmessage = 0;
    Communication.smessage = 0;
    Communication.maxSignalRange = 0;
    Communication.maxSignalRangeM = 0;
    bc19.Communication = Communication;
    Communication["__class"] = "bc19.Communication";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Nav = (function (_super) {
        __extends(Nav, _super);
        function Nav() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Nav.destSetPilgrimToResource = function () {
            var path = ([]);
            var que = ([]);
            var parent = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var marked = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var value = -1;
            var mx = -100000;
            var mxx = null;
            var po;
            var pi;
            var ppo;
            for (var i = 0; i < bc19.Util.size; ++i)
                for (var j = 0; j < bc19.Util.size; ++j)
                    marked[i][j] = false;
            ;
            /* add */ (que.push(bc19.Util.myp) > 0);
            marked[bc19.Util.myp.x][bc19.Util.myp.y] = true;
            parent[bc19.Util.myp.x][bc19.Util.myp.y] = null;
            /*outerloop:*/ while ((!(que.length == 0))) {
                po = (function (a) { return a.length == 0 ? null : a.shift(); })(que);
                {
                    var array157 = function () { var result = []; for (var val in bc19.Direction4) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (var index156 = 0; index156 < array157.length; index156++) {
                        var dir = array157[index156];
                        {
                            pi = po.dir4To(dir);
                            if (pi != null && !marked[pi.x][pi.y] && bc19.Util.p[pi.x][pi.y].passable && (bc19.Util.myp !== po || bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
                                if (pi.fuel && bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
                                    value = -pi.dist2(bc19.Util.myp);
                                    if (value >= mx) {
                                        mx = value;
                                        mxx = pi;
                                    }
                                }
                                if (pi.karbonite && bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
                                    bc19.Util.dest = pi;
                                    ppo = po;
                                    /* push */ (path.push(pi) > 0);
                                    while ((parent[ppo.x][ppo.y] != null)) {
                                        /* push */ (path.push(ppo) > 0);
                                        ppo = parent[ppo.x][ppo.y];
                                    }
                                    ;
                                    bc19.Util.mr.log("dest(t) seted (k). pathsize: " + path.length);
                                    return path;
                                }
                                /* add */ (que.push(pi) > 0);
                                marked[pi.x][pi.y] = true;
                                parent[pi.x][pi.y] = po;
                            }
                        }
                    }
                }
                if (mxx != null && po.dist2(bc19.Util.myp) >= bc19.Util.myp.dist2(mxx) * 2) {
                    bc19.Util.dest = mxx;
                    ppo = parent[bc19.Util.dest.x][bc19.Util.dest.y];
                    /* push */ (path.push(bc19.Util.dest) > 0);
                    while ((parent[ppo.x][ppo.y] != null)) {
                        /* push */ (path.push(ppo) > 0);
                        ppo = parent[ppo.x][ppo.y];
                    }
                    ;
                    bc19.Util.mr.log("dest(t) fuel. pathsize: " + path.length + " - " + Nav.ins + " - " + bc19.Util.dest + " - " + mx);
                    bc19.Util.mr.timerLog += " time3: " + (Date.now() - bc19.Util.fTime);
                    return path;
                }
            }
            ;
            return null;
        };
        Nav.backResourceToCC = function () {
            bc19.Util.mr.log("backRes");
            var path = ([]);
            var que = ([]);
            var parent = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var marked = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var po;
            var pi;
            var ppo;
            for (var i = 0; i < bc19.Util.size; ++i)
                for (var j = 0; j < bc19.Util.size; ++j)
                    marked[i][j] = false;
            ;
            /* add */ (que.push(bc19.Util.myp) > 0);
            marked[bc19.Util.myp.x][bc19.Util.myp.y] = true;
            parent[bc19.Util.myp.x][bc19.Util.myp.y] = null;
            var qq = 0;
            /*outerloop:*/ while ((!(que.length == 0))) {
                po = (function (a) { return a.length == 0 ? null : a.shift(); })(que);
                {
                    var array159 = function () { var result = []; for (var val in bc19.Direction4) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (var index158 = 0; index158 < array159.length; index158++) {
                        var dir = array159[index158];
                        {
                            pi = po.dir4To(dir);
                            if (pi != null && !marked[pi.x][pi.y] && bc19.Util.p[pi.x][pi.y].passable && (bc19.Util.myp !== po || bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
                                if ((bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] > 0 && (bc19.Util.mr.getRobot(bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x]).unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number() || bc19.Util.mr.getRobot(bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x]).unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Church].number())) || (pi.icastle)) {
                                    if (bc19.Direction4["_$wrappers"][dir].number() < 8) {
                                        bc19.Util.dest = po;
                                        ppo = po;
                                        while ((parent[ppo.x][ppo.y] != null)) {
                                            /* push */ (path.push(ppo) > 0);
                                            ppo = parent[ppo.x][ppo.y];
                                        }
                                        ;
                                        bc19.Util.mr.log("dest(r) seted. pathsize: " + path.length);
                                        qq = 0 - qq;
                                        bc19.Util.mr.log("GG:" + qq);
                                        return path;
                                    }
                                    else {
                                    }
                                }
                                else {
                                    qq++;
                                    /* add */ (que.push(pi) > 0);
                                    marked[pi.x][pi.y] = true;
                                    parent[pi.x][pi.y] = po;
                                }
                            }
                        }
                    }
                }
            }
            ;
            bc19.Util.mr.log("GG:" + qq);
            return null;
        };
        /*private*/ Nav.calcEnemyCastle = function () {
            var vertical = true;
            var horizontal = true;
            outter: for (var i = 0; i < bc19.Util.size; ++i)
                for (var j = 0; j < bc19.Util.size; ++j) {
                    if (bc19.Util.p[i][j].passable !== bc19.Util.p[i][bc19.Util.size - j - 1].passable) {
                        vertical = false;
                        break outter;
                    }
                    if (bc19.Util.p[i][j].passable !== bc19.Util.p[bc19.Util.size - i - 1][j].passable) {
                        horizontal = false;
                        break outter;
                    }
                }
            ;
            ;
            for (var index160 = 0; index160 < bc19.Util.castlei_$LI$().length; index160++) {
                var po = bc19.Util.castlei_$LI$()[index160];
                {
                    if (vertical) {
                        bc19.Util.p[po.x][bc19.Util.size - po.y - 1].ocastle = true;
                        Nav.agoal = bc19.Util.p[po.x][bc19.Util.size - po.y - 1];
                    }
                    if (horizontal) {
                        bc19.Util.p[bc19.Util.size - po.x - 1][po.y].ocastle = true;
                        Nav.agoal = bc19.Util.p[bc19.Util.size - po.x - 1][po.y];
                    }
                }
            }
            {
                var array162 = bc19.Util.mr.getVisibleRobots();
                for (var index161 = 0; index161 < array162.length; index161++) {
                    var r = array162[index161];
                    {
                        if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number()) {
                            if (vertical) {
                                bc19.Util.p[r.x][bc19.Util.size - r.y - 1].ocastle = true;
                                Nav.agoal = bc19.Util.p[r.x][bc19.Util.size - r.y - 1];
                            }
                            if (horizontal) {
                                bc19.Util.p[bc19.Util.size - r.x - 1][r.y].ocastle = true;
                                Nav.agoal = bc19.Util.p[bc19.Util.size - r.x - 1][r.y];
                            }
                        }
                    }
                }
            }
            if (vertical && horizontal)
                bc19.Util.mr.log("FuckVFuckH :((");
        };
        Nav.AStar = function () {
            bc19.Util.mr.log("LastAStar:" + Nav.ins + " flag: " + Nav.flag);
            Nav.agoal = null;
            Nav.calcEnemyCastle();
            if (Nav.agoal == null) {
                bc19.Util.mr.log("no goal A* :(");
                return null;
            }
            return Nav.sadbfs(Nav.agoal);
        };
        /*private*/ Nav.sadbfs = function (goal) {
            bc19.Util.mr.timerLog += " time2: " + (Date.now() - bc19.Util.fTime);
            var path = ([]);
            var que = ([]);
            var parent = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var marked = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var value = -1;
            var mx = -100000;
            var mxx = null;
            var po;
            var pi;
            var ppo;
            for (var i = 0; i < bc19.Util.size; ++i)
                for (var j = 0; j < bc19.Util.size; ++j)
                    marked[i][j] = false;
            ;
            /* add */ (que.push(bc19.Util.myp) > 0);
            marked[bc19.Util.myp.x][bc19.Util.myp.y] = true;
            parent[bc19.Util.myp.x][bc19.Util.myp.y] = null;
            Nav.ins = 0;
            /*outerloop:*/ while ((!(que.length == 0))) {
                po = (function (a) { return a.length == 0 ? null : a.shift(); })(que);
                {
                    var array164 = function () { var result = []; for (var val in bc19.Direction4) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (var index163 = 0; index163 < array164.length; index163++) {
                        var dir = array164[index163];
                        {
                            Nav.ins++;
                            pi = po.dir4To(dir);
                            if (pi != null && !marked[pi.x][pi.y] && bc19.Util.p[pi.x][pi.y].passable && (bc19.Util.myp !== po || bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
                                if (pi.ocastle) {
                                    bc19.Util.dest = pi;
                                    ppo = po;
                                    /* push */ (path.push(bc19.Util.dest) > 0);
                                    while ((parent[ppo.x][ppo.y] != null)) {
                                        /* push */ (path.push(ppo) > 0);
                                        ppo = parent[ppo.x][ppo.y];
                                    }
                                    ;
                                    bc19.Util.mr.log("dest(t) seted. pathsize: " + path.length + " - " + Nav.ins);
                                    bc19.Util.mr.timerLog += " time3: " + (Date.now() - bc19.Util.fTime);
                                    return path;
                                }
                                /* add */ (que.push(pi) > 0);
                                marked[pi.x][pi.y] = true;
                                parent[pi.x][pi.y] = po;
                                value = -pi.dist2(goal);
                                if (value >= mx) {
                                    mx = value;
                                    mxx = pi;
                                }
                            }
                        }
                    }
                }
            }
            ;
            return null;
        };
        Nav.reAStar = function () {
            bc19.Util.mr.log("LastAStar:" + Nav.ins + " flag: " + Nav.flag);
            Nav.agoal = bc19.Util.dest;
            return Nav.cAStar4(Nav.agoal);
        };
        Nav.cAStar4 = function (goal) {
            Nav.speed = 4;
            var po = null;
            var pi;
            var hp = null;
            Nav.ins = 0;
            var gg;
            var value = -1;
            var path = ([]);
            bc19.Util.mr.log("SIZE: ");
            var closedSet = new bc19.HashSetI();
            var openSet = new bc19.HashSetI();
            openSet.add(bc19.Util.myp);
            bc19.Util.mr.log("SIZE: ");
            var parent = new bc19.HashMapPP();
            parent.add(bc19.Util.myp, null);
            var g = new bc19.HashMapPI();
            g.add(bc19.Util.myp, 0);
            bc19.Util.mr.log("SIZE: ");
            var fm = new bc19.HashMapIM();
            var fq = new bc19.MPriorityQueue();
            var f = new bc19.HashMapPI();
            bc19.Util.mr.log("SIZE: ");
            value = Nav.h(bc19.Util.myp, goal);
            f.add(bc19.Util.myp, value);
            hp = new bc19.HashSetI();
            hp.add(bc19.Util.myp);
            fm.add(value, hp);
            fq.add(value);
            var fn = 0;
            var cry = 0;
            var ccry = 0;
            bc19.Util.mr.log("SIZE: ");
            bc19.Util.mr.timerLog += " time2: " + (Date.now() - bc19.Util.fTime);
            while ((!openSet.isEmpty())) {
                if (fq.size() === 0) {
                    bc19.Util.mr.log("BAD BUG 01 : " + openSet.size() + " - " + closedSet.size() + " - " + Nav.ins + " - " + cry + " + " + openSet.getFirst());
                    break;
                }
                Nav.flag = 1;
                fn = fq.poll();
                Nav.flag = 11;
                hp = fm.get(fn);
                if (hp == null || hp.size() === 0) {
                    ++ccry;
                    continue;
                }
                Nav.flag = 12;
                if (hp.size() === 0) {
                    bc19.Util.mr.log("BAD BUG 02 : " + openSet.size() + " - " + closedSet.size() + " - " + Nav.ins + " - " + cry + " + " + openSet.getFirst() + " fn: " + fn);
                    break;
                }
                po = hp.getFirst();
                Nav.flag = 2;
                if (!openSet.contains(po)) {
                    ++cry;
                    continue;
                }
                if (hp.size() === 1)
                    fm.remove(fn);
                else
                    hp.remove(po);
                Nav.flag = 3;
                if (po.ocastle) {
                    bc19.Util.mr.timerLog += " time3: " + (Date.now() - bc19.Util.fTime);
                    bc19.Util.dest = po;
                    var ppo = po;
                    while ((parent.get(ppo) != null)) {
                        /* push */ (path.push(ppo) > 0);
                        ppo = parent.get(ppo);
                    }
                    ;
                    bc19.Util.mr.log("destA*(Castle) seted. pathsize: " + path.length);
                    bc19.Util.mr.log("ins: " + Nav.ins + " cry: " + cry + " ccry:" + ccry);
                    return path;
                }
                Nav.flag = 4;
                openSet.remove(po);
                closedSet.add(po);
                Nav.flag = 5;
                {
                    var array166 = function () { var result = []; for (var val in bc19.Direction4) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (var index165 = 0; index165 < array166.length; index165++) {
                        var dir = array166[index165];
                        {
                            ++Nav.ins;
                            pi = po.dir4To(dir);
                            if (pi == null || closedSet.contains(pi) || !pi.passable || (bc19.Util.myp === po && bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] !== 0))
                                continue;
                            Nav.flag = 6;
                            gg = g.get(po) + 1;
                            if (!openSet.contains(pi))
                                openSet.add(pi);
                            else if (gg >= g.get(pi))
                                continue;
                            Nav.flag = 7;
                            parent.add(pi, po);
                            g.add(pi, gg);
                            value = gg + Nav.h(pi, goal);
                            if (f.contains(pi)) {
                                if (fm.get(f.get(pi)) == null) {
                                    bc19.Util.mr.log("tt :" + f.get(pi) + " - " + fm.size() + " - " + f.size() + " - " + fq.size());
                                }
                                if (fm.contains(f.get(pi)))
                                    fm.get(f.get(pi)).remove(pi);
                            }
                            Nav.flag = 8;
                            f.add(pi, value);
                            if (fm.contains(value))
                                fm.get(value).add(pi);
                            else {
                                hp = new bc19.HashSetI();
                                hp.add(pi);
                                fm.add(value, hp);
                            }
                            Nav.flag = 9;
                            fq.add(value);
                        }
                    }
                }
            }
            ;
            bc19.Util.mr.log("ins: " + Nav.ins + " cry: " + cry + " ccry:" + ccry);
            return null;
        };
        /*private*/ Nav.h = function (pi, goal) {
            return (((Math.abs(goal.dxTo(pi)) + Math.abs(goal.dyTo(pi))) | 0) / 2 | 0);
        };
        Nav.defCastleWithPreacher = function () {
            Nav.agoal = null;
            Nav.calcEnemyCastle();
            if (Nav.agoal == null) {
                bc19.Util.mr.log("no goal A* :(");
                return null;
            }
            bc19.Util.mr.timerLog += " time2: " + (Date.now() - bc19.Util.fTime);
            var path = ([]);
            var que = ([]);
            var parent = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var marked = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var value = -1;
            var mx = -100000;
            var mxx = null;
            var po;
            var pi;
            var ppo;
            for (var i = 0; i < bc19.Util.size; ++i)
                for (var j = 0; j < bc19.Util.size; ++j)
                    marked[i][j] = false;
            ;
            /* add */ (que.push(bc19.Util.myp) > 0);
            marked[bc19.Util.myp.x][bc19.Util.myp.y] = true;
            parent[bc19.Util.myp.x][bc19.Util.myp.y] = null;
            Nav.ins = 0;
            /*outerloop:*/ while ((!(que.length == 0))) {
                po = (function (a) { return a.length == 0 ? null : a.shift(); })(que);
                {
                    var array168 = function () { var result = []; for (var val in bc19.Direction4) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (var index167 = 0; index167 < array168.length; index167++) {
                        var dir = array168[index167];
                        {
                            Nav.ins++;
                            pi = po.dir4To(dir);
                            if (pi != null && !marked[pi.x][pi.y] && bc19.Util.p[pi.x][pi.y].passable && (bc19.Util.myp !== po || bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) && !pi.karbonite && !pi.fuel) {
                                /* add */ (que.push(pi) > 0);
                                marked[pi.x][pi.y] = true;
                                parent[pi.x][pi.y] = po;
                                value = -pi.dist2(Nav.agoal);
                                if (value >= mx && pi.dist2(bc19.Util.myCastle) > 8) {
                                    mx = value;
                                    mxx = pi;
                                }
                            }
                        }
                    }
                }
                if (po.dist2(bc19.Util.myCastle) > 16) {
                    bc19.Util.dest = mxx;
                    ppo = parent[bc19.Util.dest.x][bc19.Util.dest.y];
                    /* push */ (path.push(bc19.Util.dest) > 0);
                    while ((parent[ppo.x][ppo.y] != null)) {
                        /* push */ (path.push(ppo) > 0);
                        ppo = parent[ppo.x][ppo.y];
                    }
                    ;
                    bc19.Util.mr.log("dest(t) INS. pathsize: " + path.length + " - " + Nav.ins + " - " + bc19.Util.dest + " - " + mx);
                    bc19.Util.mr.timerLog += " time3: " + (Date.now() - bc19.Util.fTime);
                    return path;
                }
            }
            ;
            return null;
        };
        Nav.nextAssignRes = function () {
            var path = ([]);
            var que = ([]);
            var parent = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var marked = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
                return undefined;
            }
            else {
                var array = [];
                for (var i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([bc19.Util.size, bc19.Util.size]);
            var value = -1;
            var mx = -100000;
            var mxx = null;
            var po;
            var pi;
            var ppo;
            for (var i = 0; i < bc19.Util.size; ++i)
                for (var j = 0; j < bc19.Util.size; ++j)
                    marked[i][j] = false;
            ;
            /* add */ (que.push(bc19.Util.myp) > 0);
            marked[bc19.Util.myp.x][bc19.Util.myp.y] = true;
            parent[bc19.Util.myp.x][bc19.Util.myp.y] = null;
            /*outerloop:*/ while ((!(que.length == 0))) {
                po = (function (a) { return a.length == 0 ? null : a.shift(); })(que);
                {
                    var array170 = function () { var result = []; for (var val in bc19.Direction4) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (var index169 = 0; index169 < array170.length; index169++) {
                        var dir = array170[index169];
                        {
                            pi = po.dir4To(dir);
                            if (pi != null && !marked[pi.x][pi.y] && bc19.Util.p[pi.x][pi.y].passable && (bc19.Util.myp !== po || bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) && (bc19.Util.myp !== po || bc19.Direction4["_$wrappers"][dir].number() < 8)) {
                                if (pi.fuel && bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
                                    value = -pi.dist2(bc19.Util.myp);
                                    if (value >= mx) {
                                        mx = value;
                                        mxx = pi;
                                    }
                                }
                                if (pi.karbonite && bc19.Util.mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
                                    bc19.Util.dest = pi;
                                    ppo = po;
                                    /* push */ (path.push(pi) > 0);
                                    while ((parent[ppo.x][ppo.y] != null)) {
                                        /* push */ (path.push(ppo) > 0);
                                        ppo = parent[ppo.x][ppo.y];
                                    }
                                    ;
                                    bc19.Util.mr.log("dest(t) seted (k). pathsize: " + path.length);
                                    return path;
                                }
                                /* add */ (que.push(pi) > 0);
                                marked[pi.x][pi.y] = true;
                                parent[pi.x][pi.y] = po;
                            }
                        }
                    }
                }
                if (mxx != null && bc19.Util.myp.distxy(po) > 8) {
                    bc19.Util.dest = mxx;
                    ppo = parent[bc19.Util.dest.x][bc19.Util.dest.y];
                    /* push */ (path.push(bc19.Util.dest) > 0);
                    while ((parent[ppo.x][ppo.y] != null)) {
                        /* push */ (path.push(ppo) > 0);
                        ppo = parent[ppo.x][ppo.y];
                    }
                    ;
                    bc19.Util.mr.log("dest(t) fuel. pathsize: " + path.length + " - " + Nav.ins + " - " + bc19.Util.dest + " - " + mx);
                    bc19.Util.mr.timerLog += " time3: " + (Date.now() - bc19.Util.fTime);
                    return path;
                }
            }
            ;
            return null;
        };
        return Nav;
    }(bc19.Util));
    Nav.agoal = null;
    Nav.ins = 0;
    Nav.flag = -1;
    Nav.speed = 0;
    bc19.Nav = Nav;
    Nav["__class"] = "bc19.Nav";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Preacher = (function (_super) {
        __extends(Preacher, _super);
        function Preacher() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preacher.turn = function (myRobot) {
            bc19.Util.setupt(myRobot);
            if (bc19.Util.me.turn === 1) {
                {
                    var array172 = bc19.Util.mr.getVisibleRobots();
                    for (var index171 = 0; index171 < array172.length; index171++) {
                        var r = array172[index171];
                        if (bc19.Util.mr.isVisible(r) && r.team === bc19.Team["_$wrappers"][bc19.Util.teami].number() && r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number()) {
                            /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                s.push(e);
                                return true;
                            }
                            else {
                                return false;
                            } })(bc19.Util.castlei_$LI$(), bc19.Util.p[r.x][r.y]);
                            bc19.Util.p[r.x][r.y].icastle = true;
                            if (bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 2) {
                                bc19.Util.myCastle = bc19.Util.p[r.x][r.y];
                            }
                        }
                    }
                }
            }
            bc19.Communication.turn();
            bc19.Communication.signalInPreacher();
            bc19.Communication.castleOut();
            var it = (function (a) { var i = 0; return { next: function () { return i < a.length ? a[i++] : null; }, hasNext: function () { return i < a.length; } }; })(bc19.Util.castlei_$LI$());
            while ((it.hasNext())) {
                var pp = it.next();
                bc19.Util.mr.log("i : " + pp);
            }
            ;
            Preacher.checkFight();
            if (Preacher.attackTarget != null) {
                Preacher.setAttackLand();
                if (Preacher.attackLand != null) {
                    bc19.Util.mr.log("attack by a preacher. x: " + Preacher.attackTarget.x + " y: " + Preacher.attackTarget.y + " x: " + Preacher.attackLand.x + " y: " + Preacher.attackLand.y);
                    return bc19.Util.mr.attack(bc19.Util.myp.dxTo(Preacher.attackLand), bc19.Util.myp.dyTo(Preacher.attackLand));
                }
                else
                    bc19.Util.mr.log("bad attack not done by a preacher. x: " + Preacher.attackTarget.x + " y: " + Preacher.attackTarget.y);
            }
            else if (!Preacher.stopCommand) {
                if (!bc19.Util.mr.lastActionDone) {
                    /* push */ (bc19.Util.mainPath.push(Preacher.savePo) > 0);
                    bc19.Util.mr.log("ASTAR VALUE: " + bc19.Nav.ins);
                }
                if (bc19.Util.dest === bc19.Util.myp) {
                    if (Preacher.mode === 0)
                        return null;
                    bc19.Util.dest.ocastle = false;
                    bc19.Util.dest = null;
                }
                if (bc19.Util.dest == null && Preacher.lastTry + 5 <= bc19.Util.me.turn) {
                    if (Preacher.mode === 0)
                        bc19.Util.mainPath = bc19.Nav.defCastleWithPreacher();
                    if (Preacher.mode !== 0)
                        bc19.Util.mainPath = bc19.Nav.AStar();
                    Preacher.lastTry = bc19.Util.me.turn;
                }
                if (bc19.Util.dest != null && bc19.Util.dest !== bc19.Util.myp) {
                    var po = (function (s) { return s[s.length - 1]; })(bc19.Util.mainPath);
                    if (Preacher.canReach(po)) {
                        /* pop */ bc19.Util.mainPath.pop();
                        Preacher.savePo = po;
                        bc19.Util.mr.log("move(1) a preacher. x: " + po.x + " y: " + po.y);
                        return bc19.Util.mr.move(bc19.Util.myp.dxTo(po), bc19.Util.myp.dyTo(po));
                    }
                    else {
                        bc19.Util.mr.log("HERE0");
                        if (bc19.Util.mainPath.length === 1) {
                            bc19.Util.mr.log("HERE1");
                            var xx = bc19.Util.myp.x + (bc19.Util.myp.dxTo(po) / 2 | 0);
                            var yy = bc19.Util.myp.y + (bc19.Util.myp.dyTo(po) / 2 | 0);
                            if (Preacher.canReach(bc19.Util.p[xx][yy])) {
                                bc19.Util.mr.log("move(2) a preacher. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                            }
                        }
                        else {
                            bc19.Util.mr.log("HERE2");
                            /* pop */ bc19.Util.mainPath.pop();
                            var poo = (function (s) { return s[s.length - 1]; })(bc19.Util.mainPath);
                            var xx = bc19.Util.myp.x + po.dxTo(poo);
                            var yy = bc19.Util.myp.y + po.dyTo(poo);
                            if (Preacher.canReach(bc19.Util.p[xx][yy])) {
                                bc19.Util.mr.log("move(3) a preacher. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                            }
                            else {
                                bc19.Util.mr.log("HERE4");
                                xx = bc19.Util.myp.x + (bc19.Util.myp.dxTo(po) / 2 | 0);
                                yy = bc19.Util.myp.y + (bc19.Util.myp.dyTo(po) / 2 | 0);
                                if (Preacher.canReach(bc19.Util.p[xx][yy])) {
                                    bc19.Util.mr.log("move(4) a preacher. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                    /* push */ (bc19.Util.mainPath.push(po) > 0);
                                    return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                                }
                                bc19.Util.mr.log("HERE5");
                            }
                        }
                    }
                }
            }
            return null;
        };
        /*private*/ Preacher.canReach = function (po) {
            if (bc19.Util.myp.dist2(po) <= 4 && bc19.Util.mr.getVisibleRobotMap()[po.y][po.x] === 0 && po.passable && Preacher.checkPreNear(po))
                return true;
            return false;
        };
        /*private*/ Preacher.checkPreNear = function (po) {
            return true;
        };
        /*private*/ Preacher.setAttackLand = function () {
            Preacher.attackLand = null;
            var w = 0;
            var f = 0;
            var e = 0;
            var mx = 0;
            var po = null;
            var poo = null;
            {
                var array174 = function () { var result = []; for (var val in bc19.Direction) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (var index173 = 0; index173 < array174.length; index173++) {
                    var dir = array174[index173];
                    {
                        po = Preacher.attackTarget.dirTo(dir);
                        if (po == null || po.dist2(bc19.Util.myp) > 16)
                            continue;
                        w = 0;
                        f = 0;
                        e = 0;
                        {
                            var array176 = function () { var result = []; for (var val in bc19.Direction) {
                                if (!isNaN(val)) {
                                    result.push(parseInt(val, 10));
                                }
                            } return result; }();
                            for (var index175 = 0; index175 < array176.length; index175++) {
                                var dir2 = array176[index175];
                                {
                                    poo = po.dirTo(dir2);
                                    if (poo == null)
                                        continue;
                                    if (bc19.Util.mr.getVisibleRobotMap()[poo.y][poo.x] === -1)
                                        ++w;
                                    else if (bc19.Util.mr.getVisibleRobotMap()[poo.y][poo.x] !== 0 && bc19.Util.mr.getRobot(bc19.Util.mr.getVisibleRobotMap()[poo.y][poo.x]).team === bc19.Team["_$wrappers"][bc19.Util.teami].number())
                                        ++f;
                                    else if (bc19.Util.mr.getVisibleRobotMap()[poo.y][poo.x] !== 0 && bc19.Util.mr.getRobot(bc19.Util.mr.getVisibleRobotMap()[poo.y][poo.x]).team === bc19.Team["_$wrappers"][bc19.Util.teamo].number())
                                        ++e;
                                }
                            }
                        }
                        if (e * 10 - f * 12 + w * 2 >= mx) {
                            Preacher.attackLand = bc19.Util.p[po.x][po.y];
                            mx = e * 10 - f * 10 + w * 2;
                        }
                    }
                }
            }
        };
        /*private*/ Preacher.checkFight = function () {
            Preacher.seenFriend = ([]);
            var value = 0;
            var mx = 0;
            var mn = 10000;
            var po = null;
            var poo = null;
            {
                var array178 = bc19.Util.mr.getVisibleRobots();
                for (var index177 = 0; index177 < array178.length; index177++) {
                    var r = array178[index177];
                    {
                        if (!bc19.Util.mr.isVisible(r))
                            continue;
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 16) {
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number())
                                value = 1;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Church].number())
                                value = 2;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Crusader].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Prophet].number())
                                value = 4;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number())
                                value = 5;
                            if (value > mx) {
                                po = bc19.Util.p[r.x][r.y];
                                mx = value;
                            }
                        }
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 16) {
                            if (mn > bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y])) {
                                poo = bc19.Util.p[r.x][r.y];
                                mn = bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]);
                            }
                        }
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teami].number() && bc19.Util.p[r.x][r.y] !== bc19.Util.myp) {
                            /* add */ (Preacher.seenFriend.push(bc19.Util.p[r.x][r.y]) > 0);
                        }
                    }
                }
            }
            Preacher.attackTarget = po;
            Preacher.dangerEnemy = poo;
        };
        /*private*/ Preacher.canAttack = function () {
            var value = 0;
            var mx = 0;
            var po = null;
            {
                var array180 = bc19.Util.mr.getVisibleRobots();
                for (var index179 = 0; index179 < array180.length; index179++) {
                    var r = array180[index179];
                    {
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 16) {
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number())
                                value = 1;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Church].number())
                                value = 2;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Crusader].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Prophet].number())
                                value = 4;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number())
                                value = 5;
                            if (value > mx) {
                                po = bc19.Util.p[r.x][r.y];
                                mx = value;
                            }
                        }
                    }
                }
            }
            return po;
        };
        return Preacher;
    }(bc19.Util));
    Preacher.savePo = null;
    Preacher.lastTry = -5;
    Preacher.attackTarget = null;
    Preacher.attackLand = null;
    Preacher.dangerEnemy = null;
    Preacher.runAway = null;
    Preacher.seenFriend = null;
    Preacher.stopCommand = false;
    Preacher.mode = 0;
    bc19.Preacher = Preacher;
    Preacher["__class"] = "bc19.Preacher";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var Prophet = (function (_super) {
        __extends(Prophet, _super);
        function Prophet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Prophet.turn = function (myRobot) {
            bc19.Util.setupt(myRobot);
            Prophet.checkFight();
            if (Prophet.dangerEnemy == null && Prophet.attackTarget != null) {
                bc19.Util.mr.log("attack by a prophet. x: " + Prophet.attackTarget.x + " y: " + Prophet.attackTarget.y);
                return bc19.Util.mr.attack(bc19.Util.myp.dxTo(Prophet.attackTarget), bc19.Util.myp.dyTo(Prophet.attackTarget));
            }
            else if (Prophet.dangerEnemy == null && Prophet.attackTarget == null) {
                if (!bc19.Util.mr.lastActionDone)
                    (bc19.Util.mainPath.push(Prophet.savePo) > 0);
                if (bc19.Util.dest === bc19.Util.myp) {
                    bc19.Util.dest.ocastle = false;
                    bc19.Util.dest = null;
                }
                if (bc19.Util.dest == null && Prophet.lastTry + 5 <= bc19.Util.me.turn) {
                    bc19.Util.mainPath = bc19.Nav.AStar();
                    Prophet.lastTry = bc19.Util.me.turn;
                }
                if (bc19.Util.dest != null && bc19.Util.dest !== bc19.Util.myp) {
                    var po = (function (s) { return s[s.length - 1]; })(bc19.Util.mainPath);
                    if (Prophet.canReach(po)) {
                        /* pop */ bc19.Util.mainPath.pop();
                        Prophet.savePo = po;
                        bc19.Util.mr.log("move(1) a prophet. x: " + po.x + " y: " + po.y);
                        return bc19.Util.mr.move(bc19.Util.myp.dxTo(po), bc19.Util.myp.dyTo(po));
                    }
                    else {
                        bc19.Util.mr.log("HERE0");
                        if (bc19.Util.mainPath.length === 1) {
                            bc19.Util.mr.log("HERE1");
                            var xx = bc19.Util.myp.x + (bc19.Util.myp.dxTo(po) / 2 | 0);
                            var yy = bc19.Util.myp.y + (bc19.Util.myp.dyTo(po) / 2 | 0);
                            if (Prophet.canReach(bc19.Util.p[xx][yy])) {
                                bc19.Util.mr.log("move(2) a prophet. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                            }
                        }
                        else {
                            bc19.Util.mr.log("HERE2");
                            /* pop */ bc19.Util.mainPath.pop();
                            var poo = (function (s) { return s[s.length - 1]; })(bc19.Util.mainPath);
                            var xx = bc19.Util.myp.x + po.dxTo(poo);
                            var yy = bc19.Util.myp.y + po.dyTo(poo);
                            if (Prophet.canReach(bc19.Util.p[xx][yy])) {
                                bc19.Util.mr.log("move(3) a prophet. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                            }
                            else {
                                bc19.Util.mr.log("HERE4");
                                xx = bc19.Util.myp.x + (bc19.Util.myp.dxTo(po) / 2 | 0);
                                yy = bc19.Util.myp.y + (bc19.Util.myp.dyTo(po) / 2 | 0);
                                if (Prophet.canReach(bc19.Util.p[xx][yy])) {
                                    bc19.Util.mr.log("move(4) a prophet. x: " + bc19.Util.p[xx][yy].x + " y: " + bc19.Util.p[xx][yy].y);
                                    /* push */ (bc19.Util.mainPath.push(po) > 0);
                                    return bc19.Util.mr.move(bc19.Util.myp.dxTo(bc19.Util.p[xx][yy]), bc19.Util.myp.dyTo(bc19.Util.p[xx][yy]));
                                }
                                bc19.Util.mr.log("HERE5");
                            }
                        }
                    }
                }
            }
            else {
                Prophet.justRunAway();
                if (Prophet.runAway != null) {
                    bc19.Util.mr.log("move(5) a prophet. x: " + Prophet.runAway.x + " y: " + Prophet.runAway.y);
                    return bc19.Util.mr.move(bc19.Util.myp.dxTo(Prophet.runAway), bc19.Util.myp.dyTo(Prophet.runAway));
                }
                else if (Prophet.attackTarget != null) {
                    bc19.Util.mr.log("attack and die by a prophet. x: " + Prophet.attackTarget.x + " y: " + Prophet.attackTarget.y);
                    return bc19.Util.mr.attack(bc19.Util.myp.dxTo(Prophet.attackTarget), bc19.Util.myp.dyTo(Prophet.attackTarget));
                }
            }
            return null;
        };
        /*private*/ Prophet.justRunAway = function () {
            Prophet.runAway = null;
            {
                var array182 = function () { var result = []; for (var val in bc19.Direction4) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (var index181 = 0; index181 < array182.length; index181++) {
                    var dir = array182[index181];
                    {
                        var po = bc19.Util.myp.dir4To(dir);
                        if (po != null && po.passable && bc19.Util.mr.getVisibleRobotMap()[po.y][po.x] === 0 && po.dist2(Prophet.dangerEnemy) > 16) {
                            Prophet.runAway = po;
                            break;
                        }
                    }
                }
            }
        };
        /*private*/ Prophet.canReach = function (po) {
            if (bc19.Util.myp.dist2(po) <= 4 && bc19.Util.mr.getVisibleRobotMap()[po.y][po.x] === 0 && po.passable)
                return true;
            return false;
        };
        /*private*/ Prophet.checkFight = function () {
            var value = 0;
            var mx = 0;
            var mn = 10000;
            var po = null;
            var poo = null;
            {
                var array184 = bc19.Util.mr.getVisibleRobots();
                for (var index183 = 0; index183 < array184.length; index183++) {
                    var r = array184[index183];
                    {
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 64 && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) >= 16) {
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Castle].number())
                                value = 1;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Church].number())
                                value = 2;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Pilgrim].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Crusader].number())
                                value = 3;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Prophet].number())
                                value = 4;
                            if (r.unit === bc19.UnitType["_$wrappers"][bc19.UnitType.Preacher].number())
                                value = 5;
                            if (value > mx) {
                                po = bc19.Util.p[r.x][r.y];
                                mx = value;
                            }
                        }
                        if (r.team === bc19.Team["_$wrappers"][bc19.Util.teamo].number() && bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]) <= 16) {
                            if (mn > bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y])) {
                                poo = bc19.Util.p[r.x][r.y];
                                mn = bc19.Util.myp.dist2(bc19.Util.p[r.x][r.y]);
                            }
                        }
                    }
                }
            }
            Prophet.attackTarget = po;
            Prophet.dangerEnemy = poo;
        };
        return Prophet;
    }(bc19.Util));
    Prophet.savePo = null;
    Prophet.lastTry = -5;
    Prophet.attackTarget = null;
    Prophet.dangerEnemy = null;
    Prophet.runAway = null;
    bc19.Prophet = Prophet;
    Prophet["__class"] = "bc19.Prophet";
})(bc19 || (bc19 = {}));
(function (bc19) {
    var MyRobot = (function (_super) {
        __extends(MyRobot, _super);
        function MyRobot() {
            var _this = _super.call(this) || this;
            _this.lastTurnEnd = true;
            _this.action = null;
            _this.timerLog = "";
            _this.lastTurn = 0;
            _this.lastActionDone = false;
            _this.lastx = 0;
            _this.lasty = 0;
            return _this;
        }
        MyRobot.prototype.turn = function () {
            this.log(this.timerLog);
            bc19.Util.fTime = Date.now();
            if (!this.lastTurnEnd)
                this.log("LastTurn not ENDED");
            this.lastTurnEnd = false;
            this.lastActionDone = this.checkAction();
            if (!this.lastActionDone)
                this.log("LastTurn not Done");
            this.log("Turn : " + this.me.turn + " Time : " + this.me.time + " karbonite : " + this.karbonite + " Fuel : " + this.fuel + " x : " + this.me.x + " y : " + this.me.y + " type: " + function () { var result = []; for (var val in bc19.UnitType) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }()[this.me.unit] + " me.kar : " + this.me.karbonite + " me.fuel : " + this.me.fuel);
            this.timerLog = "time0: " + (Date.now() - bc19.Util.fTime);
            if (!bc19.Util.initDone)
                bc19.Util.init(this);
            this.timerLog += " time1: " + (Date.now() - bc19.Util.fTime);
            this.action = null;
            switch ((function () { var result = []; for (var val in bc19.UnitType) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }()[this.me.unit])) {
                case bc19.UnitType.Castle:
                    this.action = bc19.Castle.turn(this);
                    break;
                case bc19.UnitType.Church:
                    break;
                case bc19.UnitType.Pilgrim:
                    this.action = bc19.Pilgrim.turn(this);
                    break;
                case bc19.UnitType.Crusader:
                    this.action = bc19.Crusader.turn(this);
                    break;
                case bc19.UnitType.Prophet:
                    this.action = bc19.Prophet.turn(this);
                    break;
                case bc19.UnitType.Preacher:
                    this.action = bc19.Preacher.turn(this);
                    break;
                default:
                    this.log("ERROR: weird robot type :" + function () { var result = []; for (var val in bc19.UnitType) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }()[this.me.unit]);
            }
            this.lastTurn = this.me.turn;
            this.lastx = this.me.x;
            this.lasty = this.me.y;
            this.lastTurnEnd = true;
            this.timerLog += " time4: " + (Date.now() - bc19.Util.fTime);
            this.log(this.timerLog);
            return this.action;
        };
        /*private*/ MyRobot.prototype.checkAction = function () {
            var ch = false;
            if (this.action == null)
                return true;
            if (this.action.constructor === bc19.AttackAction) {
                ch = true;
            }
            else if (this.action.constructor === bc19.BuildAction) {
                ch = true;
            }
            else if (this.action.constructor === bc19.GiveAction) {
                if (this.me.karbonite === 0 && this.me.fuel === 0)
                    ch = true;
            }
            else if (this.action.constructor === bc19.MineAction) {
                ch = true;
            }
            else if (this.action.constructor === bc19.MoveAction) {
                var ma = this.action;
                if (this.lastx + ma.dx === this.me.x && this.lasty + ma.dy === this.me.y)
                    ch = true;
            }
            else if (this.action.constructor === bc19.TradeAction) {
                ch = true;
            }
            else
                this.log("ERROR: weird action type :" + this.action.constructor);
            return ch;
        };
        return MyRobot;
    }(bc19.BCAbstractRobot));
    bc19.MyRobot = MyRobot;
    MyRobot["__class"] = "bc19.MyRobot";
})(bc19 || (bc19 = {}));
bc19.MPriorityQueue.MAX_ARRAY_SIZE_$LI$();
bc19.Util.resGoalP_$LI$();
bc19.Util.fuelP_$LI$();
bc19.Util.karbonP_$LI$();
bc19.Util.yid_$LI$();
bc19.Util.xid_$LI$();
bc19.Util.castleo_$LI$();
bc19.Util.castlei_$LI$();
bc19.Util.preacheri_$LI$();
bc19.Util.__dy9_$LI$();
bc19.Util.__dx9_$LI$();
bc19.Util.__dy4_$LI$();
bc19.Util.__dx4_$LI$();
bc19.Util.__dy_$LI$();
bc19.Util.__dx_$LI$();
bc19.FastMath.lookupRand256Length_$LI$();
//# sourceMappingURL=bundle.js.map
var specs = {"COMMUNICATION_BITS":16,"CASTLE_TALK_BITS":8,"MAX_ROUNDS":1000,"TRICKLE_FUEL":25,"INITIAL_KARBONITE":100,"INITIAL_FUEL":500,"MINE_FUEL_COST":1,"KARBONITE_YIELD":2,"FUEL_YIELD":10,"MAX_TRADE":1024,"MAX_BOARD_SIZE":64,"MAX_ID":4096,"CASTLE":0,"CHURCH":1,"PILGRIM":2,"CRUSADER":3,"PROPHET":4,"PREACHER":5,"RED":0,"BLUE":1,"CHESS_INITIAL":100,"CHESS_EXTRA":20,"TURN_MAX_TIME":200,"MAX_MEMORY":50000000,"UNITS":[{"CONSTRUCTION_KARBONITE":null,"CONSTRUCTION_FUEL":null,"KARBONITE_CAPACITY":null,"FUEL_CAPACITY":null,"SPEED":0,"FUEL_PER_MOVE":null,"STARTING_HP":200,"VISION_RADIUS":100,"ATTACK_DAMAGE":10,"ATTACK_RADIUS":[1,64],"ATTACK_FUEL_COST":10,"DAMAGE_SPREAD":0},{"CONSTRUCTION_KARBONITE":50,"CONSTRUCTION_FUEL":200,"KARBONITE_CAPACITY":null,"FUEL_CAPACITY":null,"SPEED":0,"FUEL_PER_MOVE":null,"STARTING_HP":100,"VISION_RADIUS":100,"ATTACK_DAMAGE":0,"ATTACK_RADIUS":0,"ATTACK_FUEL_COST":0,"DAMAGE_SPREAD":0},{"CONSTRUCTION_KARBONITE":10,"CONSTRUCTION_FUEL":50,"KARBONITE_CAPACITY":20,"FUEL_CAPACITY":100,"SPEED":4,"FUEL_PER_MOVE":1,"STARTING_HP":10,"VISION_RADIUS":100,"ATTACK_DAMAGE":null,"ATTACK_RADIUS":null,"ATTACK_FUEL_COST":null,"DAMAGE_SPREAD":null},{"CONSTRUCTION_KARBONITE":15,"CONSTRUCTION_FUEL":50,"KARBONITE_CAPACITY":20,"FUEL_CAPACITY":100,"SPEED":9,"FUEL_PER_MOVE":1,"STARTING_HP":40,"VISION_RADIUS":49,"ATTACK_DAMAGE":10,"ATTACK_RADIUS":[1,16],"ATTACK_FUEL_COST":10,"DAMAGE_SPREAD":0},{"CONSTRUCTION_KARBONITE":25,"CONSTRUCTION_FUEL":50,"KARBONITE_CAPACITY":20,"FUEL_CAPACITY":100,"SPEED":4,"FUEL_PER_MOVE":2,"STARTING_HP":20,"VISION_RADIUS":64,"ATTACK_DAMAGE":10,"ATTACK_RADIUS":[16,64],"ATTACK_FUEL_COST":25,"DAMAGE_SPREAD":0},{"CONSTRUCTION_KARBONITE":30,"CONSTRUCTION_FUEL":50,"KARBONITE_CAPACITY":20,"FUEL_CAPACITY":100,"SPEED":4,"FUEL_PER_MOVE":3,"STARTING_HP":60,"VISION_RADIUS":16,"ATTACK_DAMAGE":20,"ATTACK_RADIUS":[1,16],"ATTACK_FUEL_COST":15,"DAMAGE_SPREAD":3}]};
var robot = new bc19.MyRobot(); robot.setSpecs(specs);