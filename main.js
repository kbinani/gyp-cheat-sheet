$(document).ready(function() {
  var gypcs = {
    language: 'ja',
    pages: {
      general: {
        button_index: {
          default: 2,
        },
        page_height: 509,
        descriptions: {
          type: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    # @1\n" + 
                "    'type':  'executable',\n" + 
                "\n" + 
                "    # @2\n" + 
                "    'type': 'loadable_module',\n" + 
                "\n" + 
                "    # @3\n" + 
                "    'type': 'shared_library',\n" + 
                "\n" + 
                "    # @4\n" + 
                "    'type': 'static_library',\n" + 
                "\n" + 
                "    # @5\n" +
                "    'type': 'none',\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            translations: {
              "@1": { ja: "アプリケーション (.exe)", en: "Application (.exe)" },
              "@2": { ja: "ダイナミック ライブラリ (.dll)", en: "Dynamic Library (.dll)" },
              "@3": { ja: "ダイナミック ライブラリ (.dll)", en: "Dynamic Library (.dll)" },
              "@4": { ja: "スタティック ライブラリ (.lib)", en: "Static library (.lib)" },
              "@5": { ja: "ユーティリティ", en: "Utility" },
            },
            button_index: {
              ja: 1,
              en: 10,
            },
            button_height: 1,
          },
          characterset: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_configuration_attributes': {\n" + 
                "      # @1\n" +
                "      'CharacterSet': '1',\n" + 
                "\n" + 
                "      # @2\n" +
                "      'CharacterSet': '2',\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            translations: {
              "@1": { ja: "Unicode 文字セットを使用する", en: "Use Unicode Character Set" },
              "@2": { ja: "マルチ バイト文字セットを使用する", en: "Use Multi-Byte Character Set" },
            },
            button_index: {
              ja: 4,
              en: 13,
            },
            button_height: 1,
          },
          toolset: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" +
                "    # Visual Studio 2008 (v90)\n" +
                "    'msbuild_toolset': 'v90',\n" +
                "\n" + 
                "    # Visual Studio 2010 (v100)\n" +
                "    'msbuild_toolset': 'v100',\n" +
                "\n" + 
                "    # Visual Studio 2012 - Windows XP\n" + 
                "    'msbuild_toolset': 'v110_xp',\n" + 
                "\n" + 
                "    # Visual Studio 2012\n" + 
                "    'msbuild_toolset': 'v110',\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              ja: 15,
              en: 7,
            },
            button_height: 1,
          },
          targetname: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'product_name': 'MyProduct'\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 11,
              en: 3,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_general: {
        button_index: {
          default: 6,
        },
        page_height: 509,
        descriptions: {
          includedir: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'include_dirs': [\n" + 
                "      'C:\SomeLibrary\include'\n" + 
                "    ]\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          additionalusingdirectories: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'AdditionalUsingDirectories': [\n" + 
                "            'folderA',\n" + 
                "            'folderB'\n" + 
                "        ]\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          debuginformationformat: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1 (/Z7)\n" + 
                "        'DebugInformationFormat': '1'\n" + 
                "\n" + 
                "        # @2 (/Zi)\n" + 
                "        'DebugInformationFormat': '3'\n" + 
                "\n" + 
                "        # @3 (/ZI)\n" + 
                "        'DebugInformationFormat': '4'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            translations: {
              "@1": { ja: "C7 互換", en: "C7 compatible" },
              "@2": { ja: "プログラム データベース", en: "Program Database" },
              "@3": { ja: "エディット コンティニュのプログラム データベース", en: "Program Database for Edit And Continue" },
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          suppressstartupbanner: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/nologo)\n" + 
                "        'SuppressStartupBanner': 'true',\n" + 
                "\n" + 
                "        # @no (/nologo-)\n" + 
                "        'SuppressStartupBanner': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          warninglevel: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1 (/W0)\n" + 
                "        'WarningLevel': '0',\n" + 
                "\n" + 
                "        # @2 (/W1)\n" + 
                "        'WarningLevel': '1',\n" + 
                "\n" + 
                "        # @3 (/W2)\n" + 
                "        'WarningLevel': '2',\n" + 
                "\n" + 
                "        # @4 (/W3)\n" + 
                "        'WarningLevel': '3',\n" + 
                "\n" + 
                "        # @5 (/W4)\n" + 
                "        'WarningLevel': '4',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            translations: {
              "@1": { ja: "すべての警告を非表示にする", en: "Turn Off All Warnings" },
              "@2": { ja: "レベル 1", en: "Level1" },
              "@3": { ja: "レベル 2", en: "Level2" },
              "@4": { ja: "レベル 3", en: "Level3" },
              "@5": { ja: "レベル 4", en: "Level4" },
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
          warnaserror: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/WX)\n" + 
                "        'WarnAsError': 'true',\n" + 
                "\n" + 
                "        # @no (/WX-)\n" + 
                "        'WarnAsError': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_optimization: {
        button_index: {
          default: 7
        },
        page_height: 509,
        descriptions: {
          optimization: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1 (/Od)\n" + 
                "        'Optimization': '0'\n" + 
                "\n" + 
                "        # @2 (/O1)\n" + 
                "        'Optimization': '1'\n" + 
                "\n" + 
                "        # @3 (/O2)\n" + 
                "        'Optimization': '2'\n" + 
                "\n" + 
                "        # @4 (/Ox)\n" + 
                "        'Optimization': '3'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            translations: {
              "@1": { ja: "無効", en: "Disabled" },
              "@2": { ja: "サイズの最小化", en: "Minimize Size" },
              "@3": { ja: "実行速度の最小化", en: "Maximize Speed" },
              "@4": { ja: "最大限の最適化", en: "Full Optimization" },
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          inlinefunctionexpansion: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1\n" + 
                "        'InlineFunctionExpansion': '0'\n" + 
                "\n" + 
                "        # @2 (/Ob1)\n" + 
                "        'InlineFunctionExpansion': '1'\n" + 
                "\n" + 
                "        # @3 (/Ob2)\n" + 
                "        'InlineFunctionExpansion': '2'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            translations: {
              "@1": { ja: "既定", en: "Default" },
              "@2": { ja: "__inline のみ", en: "Only __inline" },
              "@3": { ja: "拡張可能な関数すべて", en: "Any Suitable" },
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          enableintrinsicfunctions: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Oi)\n" + 
                "        'EnableIntrinsicFunctions': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'EnableIntrinsicFunctions': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          favorsizeorspeed: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1\n" + 
                "        'FavorSizeOrSpeed': '0',\n" + 
                "\n" + 
                "        # @2 (/Ot)\n" + 
                "        'FavorSizeOrSpeed': '1',\n" + 
                "\n" + 
                "        # @3 (/Os)\n" + 
                "        'FavorSizeOrSpeed': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            translations: {
              "@1": { ja: "なし", en: "Neither" },
              "@2": { ja: "実行速度を優先", en: "Favor fast code" },
              "@3": { ja: "実行可能ファイルのサイズを優先", en: "Favor small code" },
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          omitframepointers: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Oy)\n" + 
                "        'OmitFramePointers': 'true'\n" + 
                "\n" + 
                "        # @no (/Oy-)\n" + 
                "        'OmitFramePointers': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          enablefibersafeoptimizations: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/GT)\n" + 
                "        'EnableFiberSafeOptimizations': 'true'\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'EnableFiberSafeOptimizations': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          wholeprogramoptimization: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/GL)\n" + 
                "        'WholeProgramOptimization': 'true'\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'WholeProgramOptimization': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_preprocessor: {
        button_index: {
          default: 8
        },
        page_height: 509,
        descriptions: {
          defines: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'defines': [\n" + 
                "        'FOO',\n" + 
                "        'BAR'\n" + 
                "    ],\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          ignorestandardincludepath: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/X)\n" + 
                "        'IgnoreStandardIncludePath': 'true'\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'IgnoreStandardIncludePath': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          undefineallpreprocessordefinitions: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/u)\n" + 
                "        'UndefineAllPreprocessorDefinitions': 'true'\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'UndefineAllPreprocessorDefinitions': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          generatepreprocessedfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1: @no\n" + 
                "        # @2: @no\n" + 
                "        'GeneratePreprocessedFile': '0',\n" + 
                "\n" + 
                "        # @1: @yes (/P)\n" + 
                "        # @2: @no\n" + 
                "        'GeneratePreprocessedFile': '1',\n" + 
                "\n" + 
                "        # @1: @yes (/P)\n" + 
                "        # @2: @yes (/EP)\n" + 
                "        'GeneratePreprocessedFile': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "ファイルの前処理", en: "Preprocess to a File" },
              "@2": { ja: "行番号の前処理の抑制", en: "Preprocess Suppress Line Numbers" },
            },
            button_index: {
              default: 4,
            },
            button_height: 2,
          },
          undefinepreprocessordefinitions: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'UndefinePreprocessorDefinitions': [\n" + 
                "            'FOO',\n" + 
                "            'BAR'\n" + 
                "        ]\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          keepcomments: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/C)\n" + 
                "        'KeepComments': 'true'\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'KeepComments': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_codegeneration: {
        button_index: {
          default: 9
        },
        page_height: 509,
        descriptions: {
          stringpooling: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/GF)\n" + 
                "        'StringPooling': 'true'\n" + 
                "\n" + 
                "        # @no (/GF-)\n" + 
                "        'StringPooling': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          minimalrebuild: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Gm)\n" + 
                "        'MinimalRebuild': 'true'\n" + 
                "\n" + 
                "        # @no (/Gm-)\n" + 
                "        'MinimalRebuild': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          exceptionhandling: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @no\n" + 
                "        'ExceptionHandling': '0'\n" + 
                "\n" + 
                "        # @yes (/EHsc)\n" + 
                "        'ExceptionHandling': '1'\n" + 
                "\n" + 
                "        # @1 (/EHa)\n" + 
                "        'ExceptionHandling': '2'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "はい - SEH の例外あり", en: "Yes with SEH Exceptions" },
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          smallertypecheck: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/RTCc)\n" + 
                "        'SmallerTypeCheck': 'true'\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'SmallerTypeCheck': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          basicruntimechecks: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1\n" + 
                "        'BasicRuntimeChecks': '0'\n" + 
                "\n" + 
                "        # @2 (/RTCs)\n" + 
                "        'BasicRuntimeChecks': '1'\n" + 
                "\n" + 
                "        # @3 (/RTCu)\n" + 
                "        'BasicRuntimeChecks': '2'\n" + 
                "\n" + 
                "        # @4 (/RTC1)\n" + 
                "        'BasicRuntimeChecks': '3'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "既定", en: "Default" },
              "@2": { ja: "スタック フレーム", en: "Stack Frames (/RTCs)" },
              "@3": { ja: "初期化されていない変数", en: "Uninitialized variables (/RTCu)" },
              "@4": { ja: "両方 (/RTC1、/RTCsu と同等)", en: "Both (/RTC1, equiv. to /RTCsu) (/RTC1)" },
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          runtimelibrary: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'configurations': {\n" + 
                "      'Debug': {\n" + 
                "        'msvs_settings': {\n" + 
                "          'VCCLCompilerTool': {\n" + 
                "            # @1 (/MT)\n" + 
                "            'RuntimeLibrary': '0',\n" + 
                "\n" + 
                "            # @2 (/MTd)\n" + 
                "            'RuntimeLibrary': '1',\n" + 
                "\n" + 
                "            # @3 (/MD)\n" + 
                "            'RuntimeLibrary': '2',\n" + 
                "\n" + 
                "            # @4 (/MDd)\n" + 
                "            'RuntimeLibrary': '3',\n" + 
                "          }\n" + 
                "        }\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "マルチスレッド", en: "Multi-threaded (/MT)" },
              "@2": { ja: "マルチスレッド デバッグ", en: "Multi-threaded Debug (/MTd)" },
              "@3": { ja: "マルチスレッド DLL", en: "Multi-threaded DLL (/MD)" },
              "@4": { ja: "マルチスレッド デバッグ DLL", en: "Multi-threaded Debug DLL (/MDd)" },
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          structmemberalignment: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1\n" + 
                "        'StructMemberAlignment': '0',\n" + 
                "\n" + 
                "        # 1 @2 (/Zp1)\n" + 
                "        'StructMemberAlignment': '1',\n" + 
                "\n" + 
                "        # 2 @3 (/Zp2)\n" + 
                "        'StructMemberAlignment': '2',\n" + 
                "\n" + 
                "        # 4 @3 (/Zp4)\n" + 
                "        'StructMemberAlignment': '3',\n" + 
                "\n" + 
                "        # 8 @3 (/Zp8)\n" + 
                "        'StructMemberAlignment': '4',\n" + 
                "\n" + 
                "        # 16 @3 (/Zp16)\n" + 
                "        'StructMemberAlignment': '5',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "既定", en: "Default" },
              "@2": { ja: "バイト", en: "Byte" },
              "@3": { ja: "バイト", en: "Bytes" },
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
          buffersecuritycheck: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/GS)\n" + 
                "        'BufferSecurityCheck': 'true',\n" + 
                "\n" + 
                "        # @no (/GS-)\n" + 
                "        'BufferSecurityCheck': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
          enablefunctionlevellinking: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Gy)\n" + 
                "        'EnableFunctionLevelLinking': 'true',\n" + 
                "\n" + 
                "        # @no (/Gy-)\n" + 
                "        'EnableFunctionLevelLinking': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 8,
            },
            button_height: 1,
          },
          enableenhancedinstructionset: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1\n" + 
                "        'EnableEnhancedInstructionSet': '0',\n" + 
                "\n" + 
                "        # @2 (/arch:SSE)\n" + 
                "        'EnableEnhancedInstructionSet': '1',\n" + 
                "\n" + 
                "        # @3 (/arch:SSE2)\n" + 
                "        'EnableEnhancedInstructionSet': '2',\n" + 
                "\n" + 
                "        # @4 (/arch:AVX)\n" + 
                "        'EnableEnhancedInstructionSet': '3',\n" + 
                "\n" + 
                "        # @5 (/arch:IA32)\n" + 
                "        'EnableEnhancedInstructionSet': '4',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "設定なし", en: "Not Set" },
              "@2": { ja: "ストリーミング SIMD 拡張機能", en: "Streaming SIMD Extensions (/arch:SSE)" },
              "@3": { ja: "ストリーミング SIMD 拡張機能 2", en: "Streaming SIMD Extensions 2 (/arch:SSE2)" },
              "@4": { ja: "Advanced Vector Extensions", en: "Advanced Vector Extensions (/arch:AVX)" },
              "@5": { ja: "拡張命令なし", en: "No Enhanced Instructions (/arch:IA32)" },
            },
            button_index: {
              default: 10,
            },
            button_height: 1,
          },
          floatingpointmodel: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # Precise (/fp:precise)\n" + 
                "        'FloatingPointModel': '0',\n" + 
                "\n" + 
                "        # Strict (/fp:strict)\n" + 
                "        'FloatingPointModel': '1',\n" + 
                "\n" + 
                "        # Fast (/fp:fast)\n" + 
                "        'FloatingPointModel': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 11,
            },
            button_height: 1,
          },
          floatingpointexceptions: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/fp:except)\n" + 
                "        'FloatingPointExceptions': 'true',\n" + 
                "\n" + 
                "        # @no (/fp:except-)\n" + 
                "        'FloatingPointExceptions': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 12,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_language: {
        button_index: {
          default: 10
        },
        page_height: 509,
        descriptions: {
          disablelanguageextensions: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Za)\n" + 
                "        'DisableLanguageExtensions': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'DisableLanguageExtensions': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          treatwchartasbuiltintype: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Zc:wchar_t)\n" + 
                "        'TreatWChar_tAsBuiltInType': 'true',\n" + 
                "\n" + 
                "        # @no (/Zc:wchar_t-)\n" + 
                "        'TreatWChar_tAsBuiltInType': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          forceconformanceinforloopscope: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Zc:forScope)\n" + 
                "        'ForceConformanceInForLoopScope': 'true',\n" + 
                "\n" + 
                "        # @no (/Zc:forScope-)\n" + 
                "        'ForceConformanceInForLoopScope': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          runtimetypeinfo: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/GR)\n" + 
                "        'RuntimeTypeInfo': 'true',\n" + 
                "\n" + 
                "        # @no (/GR-)\n" + 
                "        'RuntimeTypeInfo': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          openmp: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/openmp)\n" + 
                "        'OpenMP': 'true',\n" + 
                "\n" + 
                "        # @no (/openmp-)\n" + 
                "        'OpenMP': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_precompiledheader: {
        button_index: {
          default: 11
        },
        page_height: 509,
        descriptions: {
          useprecompiledheader: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1\n" + 
                "        'UsePrecompiledHeader': '0',\n" + 
                "\n" + 
                "        # @2 (/Yc)\n" + 
                "        'UsePrecompiledHeader': '1',\n" + 
                "\n" + 
                "        # @3 (/Yu)\n" + 
                "        'UsePrecompiledHeader': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
                "'targets': [\n" + 
                "  {\n" + 
                "    # @4\n" + 
                "    'msvs_precompiled_source': 'stdafx.cpp',\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "プリコンパイル済みヘッダーを使用しない", en: "Not Using Precompiled Headers" },
              "@2": { ja: "作成", en: "Create" },
              "@3": { ja: "使用", en: "Use" },
              "@4": { ja: "stdafx.cpp について、'作成 (/Yc)'", en: "'Create (/Yc)' for stdafx.cpp" },
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          precompiledheaderthrough: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'PrecompiledHeaderThrough': 'stdafx.h',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          precompiledheaderfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'PrecompiledHeaderFile': '$(IntDir)$(TargetName).pch',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_output: {
        button_index: {
          default: 12
        },
        page_height: 509,
        descriptions: {
          expandattributedsource: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Fx)\n" + 
                "        'ExpandAttributedSource': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'ExpandAttributedSource': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          assembleroutput: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1\n" + 
                "        'AssemblerOutput': '0',\n" + 
                "\n" + 
                "        # @2 (/FA)\n" + 
                "        'AssemblerOutput': '1',\n" + 
                "\n" + 
                "        # @3 (/FAcs)\n" + 
                "        'AssemblerOutput': '2',\n" + 
                "\n" + 
                "        # @4 (/FAc)\n" + 
                "        'AssemblerOutput': '3',\n" + 
                "\n" + 
                "        # @5 (/FAs)\n" + 
                "        'AssemblerOutput': '4',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "なし", en: "No Listing" },
              "@2": { ja: "アセンブリ コードのみ", en: "Assembly-Only Listing" },
              "@3": { ja: "アセンブリ コード、コンピューター語コード、ソース コード", en: "Assembly, Machine Code and Source" },
              "@4": { ja: "アセンブリ コードとコンピューター語コード", en: "Assembly With Machine Code" },
              "@5": { ja: "アセンブリ コードとソース コード", en: "Assembly With Source Code" },
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          assemblerlistinglocation: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'AssemblerListingLocation': '$(IntDir)',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          objectfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'ObjectFile': '$(IntDir)',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          programdatabasefilename: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'ProgramDataBaseFileName': '$(IntDir)vc$(PlatformToolsetVersion).pdb',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          generatexmldocumentationfiles: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/doc)\n" + 
                "        'GenerateXMLDocumentationFiles': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'GenerateXMLDocumentationFiles': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
          xmldocumentationfilename: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'XMLDocumentationFileName': '$(IntDir)',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_browserinformation: {
        button_index: {
          default: 13
        },
        page_height: 509,
        descriptions: {
          browseinformation: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @no\n" + 
                "        'BrowseInformation': '0',\n" + 
                "\n" + 
                "        # @yes (/FR)\n" + 
                "        'BrowseInformation': '1',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          browseinformationfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'BrowseInformationFile': '$(IntDir)',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_details: {
        button_index: {
          default: 14
        },
        page_height: 509,
        descriptions: {
          disablespecificwarnings: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'DisableSpecificWarnings': [\n" + 
                "          '4996', // warning C4996\n" + 
                "        ],\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          callingconversion: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # __cdecl (/Gd)\n" + 
                "        'CallingConvention': '0'\n" + 
                "\n" + 
                "        # __fastcall (/Gr)\n" + 
                "        'CallingConvention': '1'\n" + 
                "\n" + 
                "        # __stdcall (/Gz)\n" + 
                "        'CallingConvention': '2'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          compileas: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1\n" + 
                "        'CompileAs': '0',\n" + 
                "\n" + 
                "        # @2 (/TC)\n" + 
                "        'CompileAs': '1',\n" + 
                "\n" + 
                "        # @3 (/TP)\n" + 
                "        'CompileAs': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "既定", en: "Default" },
              "@2": { ja: "C コードとしてコンパイル", en: "Compile as C Code" },
              "@3": { ja: "C++ コードとしてコンパイル", en: "Compile as C++ Code" },
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          forcedincludefiles: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'ForcedIncludeFiles': [\n" + 
                "          'stdafx.h',\n" + 
                "        ],\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          forcedusingfiles: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'ForcedUsingFiles': [\n" + 
                "          'fileA',\n" + 
                "          'fileB',\n" + 
                "        ],\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          vcclcompilertool: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/showIncludes)\n" + 
                "        'ShowIncludes': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'ShowIncludes': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          usefullpaths: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/FC)\n" + 
                "        'UseFullPaths': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'UseFullPaths': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
          omitdefaultlibname: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @yes (/Zl)\n" + 
                "        'OmitDefaultLibName': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'OmitDefaultLibName': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
          errorreporting: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # @1 (/errorReport:none)\n" + 
                "        'ErrorReporting': '0',\n" + 
                "\n" + 
                "        # @2 (/errorReport:prompt)\n" + 
                "        'ErrorReporting': '1',\n" + 
                "\n" + 
                "        # @3 (/errorReport:queue)\n" + 
                "        'ErrorReporting': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "レポートを送信しない", en: "Do Not Send Report" },
              "@2": { ja: "すぐにメッセージを表示", en: "Prompt Immediately" },
              "@3": { ja: "次回ログインのためのキュー", en: "Queue For Next Login" },
            },
            button_index: {
              default: 8,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_general: {
        button_index: {
          default: 18
        },
        page_height: 509,
        descriptions: {
          outputfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'OutputFile': '$(OutDir)$(TargetName)$(TargetExt)',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          showprogress: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @1\n" + 
                "        'ShowProgress': '0',\n" + 
                "\n" + 
                "        # @2 (/VERBOSE)\n" + 
                "        'ShowProgress': '1',\n" + 
                "\n" + 
                "        # @3 (/VERBOSE:Lib)\n" + 
                "        'ShowProgress': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "設定なし", en: "Not Set" },
              "@2": { ja: "詳細情報をすべて表示", en: "Display all progress messages" },
              "@3": { ja: "検索したライブラリ", en: "For Libraries Searched" },
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          version: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'Version': '3.14159',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          linkincremental: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @no (/INCREMENTAL:NO)\n" + 
                "        'LinkIncremental': '1',\n" + 
                "\n" + 
                "        # @yes (/INCREMENTAL)\n" + 
                "        'LinkIncremental': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          suppressstartupbanner: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/NOLOGO)\n" + 
                "        'SuppressStartupBanner': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'SuppressStartupBanner': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          ignoreimportlibrary: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes\n" + 
                "        'IgnoreImportLibrary': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'IgnoreImportLibrary': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          registeroutput: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes\n" + 
                "        'RegisterOutput': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'RegisterOutput': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
          peruserredirection: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes\n" + 
                "        'PerUserRedirection': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'PerUserRedirection': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
          additionallibrarydirectories: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'AdditionalLibraryDirectories': [\n" + 
                "          'C:\SomeLibrary\lib',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 8,
            },
            button_height: 1,
          },
          linklibrarydependencies: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes\n" + 
                "        'LinkLibraryDependencies': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'LinkLibraryDependencies': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 9,
            },
            button_height: 1,
          },
          uselibrarydependencyinputs: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes\n" + 
                "        'UseLibraryDependencyInputs': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'UseLibraryDependencyInputs': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 10,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_input: {
        button_index: {
          default: 19
        },
        page_height: 509,
        descriptions: {
          additionaldependencies: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'AdditionalDependencies': [\n" + 
                "          'file1',\n" + 
                "          'file2',\n" + 
                "        ]\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          ignorealldefaultlibraries: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/NODEFAULTLIB)\n" + 
                "        'IgnoreAllDefaultLibraries': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'IgnoreAllDefaultLibraries': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          ignoredefaultlibrarynames: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'IgnoreDefaultLibraryNames': [\n" + 
                "          'file1',\n" + 
                "          'file2',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          moduledefinitionfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ModuleDefinitionFile': 'a_file_name.def',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          addmodulenamestoassembly: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'AddModuleNamesToAssembly': [\n" + 
                "          'file1',\n" + 
                "          'file2',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          embedmanagedresourcefile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'EmbedManagedResourceFile': [\n" + 
                "          'file1',\n" + 
                "          'file2',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          forcesymbolreferences: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ForceSymbolReferences': [\n" + 
                "          'file1',\n" + 
                "          'file2',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
          delayloaddlls: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'DelayLoadDLLs': [\n" + 
                "          'file1',\n" + 
                "          'file2',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
          assemblylinkresource: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'AssemblyLinkResource': [\n" + 
                "          'file1',\n" + 
                "          'file2',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 8,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_manifestfile: {
        button_index: {
          default: 20
        },
        page_height: 509,
        descriptions: {
          generatemanifest: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/MANIFEST)\n" + 
                "        'GenerateManifest': 'true',\n" + 
                "\n" + 
                "        # @no (/MANIFEST:NO)\n" + 
                "        'GenerateManifest': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          manifestfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ManifestFile': '$(IntDir)$(TargetName)$(TargetExt).intermediate.manifest',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          additionalmanifestdependencies: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'AdditionalManifestDependencies': [\n" + 
                "          'file1',\n" + 
                "          'file2',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          allowisolation: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes\n" + 
                "        'AllowIsolation': 'true',\n" + 
                "\n" + 
                "        # @no (/ALLOWISOLATION:NO)\n" + 
                "        'AllowIsolation': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          enableuac: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/MANIFESTUAC:)\n" + 
                "        'EnableUAC': 'true',\n" + 
                "\n" + 
                "        # @no (/MANIFESTUAC:NO)\n" + 
                "        'EnableUAC': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          uacexecutionlevel: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # asInvoker (/level='asInvoker')\n" + 
                "        'UACExecutionLevel': '0',\n" + 
                "\n" + 
                "        # highestAvailable (/level='highestAvailable')\n" + 
                "        'UACExecutionLevel': '1',\n" + 
                "\n" + 
                "        # requireAdministrator (/level='requireAdministrator')\n" + 
                "        'UACExecutionLevel': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          uacuiaccess: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/uiAccess='true')\n" + 
                "        'UACUIAccess': 'true',\n" + 
                "\n" + 
                "        # @no (/uiAccess='false')\n" + 
                "        'UACUIAccess': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_debug: {
        button_index: {
          default: 21
        },
        page_height: 509,
        descriptions: {
          generatedebuginformation: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'configurations': {\n" + 
                "      'Debug': {\n" + 
                "        'msvs_settings': {\n" + 
                "          'VCLinkerTool': {\n" + 
                "            # @yes (/DEBUG)\n" + 
                "            'GenerateDebugInformation': 'true',\n" + 
                "\n" + 
                "            # @no\n" + 
                "            'GenerateDebugInformation': 'false',\n" + 
                "          },\n" + 
                "        }\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          programdatabasefile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ProgramDatabaseFile': '$(OutDir)$(TargetName).pdb',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          stripprivatesymbols: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "       'StripPrivateSymbols': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          generatemapfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/MAP)\n" + 
                "        'GenerateMapFile': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'GenerateMapFile': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          mapfilename: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'MapFileName': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          mapexports: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/MAPINFO:EXPORTS)\n" + 
                "        'MapExports': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'MapExports': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          assemblydebug: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/ASSEMBLYDEBUG)\n" + 
                "        'AssemblyDebug': '1',\n" + 
                "\n" + 
                "        # @no (/ASSEMBLYDEBUG:DISABLE)\n" + 
                "        'AssemblyDebug': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_system: {
        button_index: {
          default: 22
        },
        page_height: 509,
        descriptions: {
          generatedebuginformation: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @1\n" + 
                "        'SubSystem': '0',\n" + 
                "\n" + 
                "        # @2 (/SUBSYSTEM:CONSOLE)\n" + 
                "        'SubSystem': '1',\n" + 
                "\n" + 
                "        # @3 (/SUBSYSTEM:WINDOWS)\n" + 
                "        'SubSystem': '2',\n" + 
                "\n" + 
                "        # @4 (/SUBSYSTEM:NATIVE)\n" + 
                "        'SubSystem': '3',\n" + 
                "\n" + 
                "        # @5 (/SUBSYSTEM:EFI_APPLICATION)\n" + 
                "        'SubSystem': '4',\n" + 
                "\n" + 
                "        # @6 (/SUBSYSTEM:EFI_BOOT_SERVICE_DRIVER)\n" + 
                "        'SubSystem': '5',\n" + 
                "\n" + 
                "        # @7 (/SUBSYSTEM:EFI_ROM)\n" + 
                "        'SubSystem': '6',\n" + 
                "\n" + 
                "        # @8 (/SUBSYSTEM:EFI_RUNTIME_DRIVER)\n" + 
                "        'SubSystem': '7',\n" + 
                "\n" + 
                "        # WindowsCE\n" + 
                "        'SubSystem': '8',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "設定なし", en: "Not Set" },
              "@2": { ja: "コンソール", en: "Console" },
              "@3": { ja: "Windows", en: "Windows" },
              "@4": { ja: "ネイティブ", en: "Native" },
              "@5": { ja: "EFI アプリケーション", en: "EFI Application" },
              "@6": { ja: "EFI ブート サービス ドライバー", en: "EFI Boot Service Driver" },
              "@7": { ja: "EFI ROM", en: "EFI ROM" },
              "@8": { ja: "EFI ランタイム", en: "EFI Runtime" },
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          heapreservesize: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'HeapReserveSize': '1048576', # size in bytes\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          heapcommitsize: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'HeapCommitSize': '4096', # size in bytes\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          stackreservesize: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'StackReserveSize': '1048576',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          stackcommitsize: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'StackCommitSize': '4096',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          largeaddressaware: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @no (/LARGEADDRESSAWARE:NO)\n" + 
                "        'LargeAddressAware': '1',\n" + 
                "\n" + 
                "        # @yes (/LARGEADDRESSAWARE)\n" + 
                "        'LargeAddressAware': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
          terminalserveraware: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @no (/TSAWARE:NO)\n" + 
                "        'TerminalServerAware': '1',\n" + 
                "\n" + 
                "        # @yes (/TSAWARE)\n" + 
                "        'TerminalServerAware': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
          swaprunfromcd: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/SWAPRUN:CD)\n" + 
                "        'SwapRunFromCD': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'SwapRunFromCD': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 8,
            },
            button_height: 1,
          },
          swaprunfromnet: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/SWAPRUN:NET)\n" + 
                "        'SwapRunFromNet': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'SwapRunFromNet': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 9,
            },
            button_height: 1,
          },
          driver: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @1\n" + 
                "        'Driver': '0',\n" + 
                "\n" + 
                "        # @2 (/Driver)\n" + 
                "        'Driver': '1',\n" + 
                "\n" + 
                "        # @3 (/DRIVER:UPONLY)\n" + 
                "        'Driver': '2',\n" + 
                "\n" + 
                "        # @4 (/DRIVER:WDM)\n" + 
                "        'Driver': '3',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "設定なし", en: "Not Set" },
              "@2": { ja: "ドライバー", en: "Driver" },
              "@3": { ja: "UP のみ", en: "UP Only" },
              "@4": { ja: "WDM", en: "WDM" },
            },
            button_index: {
              default: 10,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_optimization: {
        button_index: {
          default: 23
        },
        page_height: 509,
        descriptions: {
          optimizereferences: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @no (/OPT:NOREF)\n" + 
                "        'OptimizeReferences': '1',\n" + 
                "\n" + 
                "        # @yes (/OPT:REF)\n" + 
                "        'OptimizeReferences': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          enablecomdatfolding: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @no (/OPT:NOICF)\n" + 
                "        'EnableCOMDATFolding': '1',\n" + 
                "\n" + 
                "        # @yes (/OPT:ICF)\n" + 
                "        'EnableCOMDATFolding': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          functionorder: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'FunctionOrder': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          profileguideddatabase: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ProfileGuidedDatabase': '$(OutDir)$(TargetName).pgd',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          linktimecodegeneration: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @1\n" + 
                "        'LinkTimeCodeGeneration': '0',\n" + 
                "\n" + 
                "        # @2 (/LTCG)\n" + 
                "        'LinkTimeCodeGeneration': '1',\n" + 
                "\n" + 
                "        # @3 (/LTCG:PGInstrument)\n" + 
                "        'LinkTimeCodeGeneration': '2',\n" + 
                "\n" + 
                "        # @4 (/LTCG:PGOptimize)\n" + 
                "        'LinkTimeCodeGeneration': '3',\n" + 
                "\n" + 
                "        # @5 (/LTCG:PGUpdate)\n" + 
                "        'LinkTimeCodeGeneration': '4',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "既定", en: "Default" },
              "@2": { ja: "リンク時のコード生成を使用", en: "Use Link Time Code Generation" },
              "@3": { ja: "ガイド付き最適化のプロファイル - インストルメント", en: "Profile Guided Optimization - Instrument" },
              "@4": { ja: "ガイド付き最適化のプロファイル - 最適化", en: "Profile Guided Optimization - Optimization" },
              "@5": { ja: "ガイド付き最適化のプロファイル - 更新ガイド付き最適化のプロファイル - 更新", en: "Profile Guided Optimization - Update" },
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_embeddedidl: {
        button_index: {
          default: 24
        },
        page_height: 509,
        descriptions: {
          midlcommandfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'MidlCommandFile': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          ignoreembeddedidl: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/IGNOREIDL)\n" + 
                "        'IgnoreEmbeddedIDL': 'true',\n" + 
                "        # @no\n" + 
                "        'IgnoreEmbeddedIDL': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          mergedidlbasefilename: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'MergedIDLBaseFileName': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          typelibraryfile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'TypeLibraryFile': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          typelibraryresourceid: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'TypeLibraryResourceID': '1',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_details: {
        button_index: {
          default: 26
        },
        page_height: 526,
        descriptions: {
          entrypointsymbol: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'EntryPointSymbol': 'entry_point_symbol',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 0,
            },
            button_height: 1,
          },
          setchecksum: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/RELEASE)\n" + 
                "        'SetChecksum': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'SetChecksum': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2,
            },
            button_height: 1,
          },
          baseaddress: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'BaseAddress': '0x400000',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 3,
            },
            button_height: 1,
          },
          randomizedbaseaddress: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @no (/DYNAMICBASE:NO)\n" + 
                "        'RandomizedBaseAddress': '1',\n" + 
                "\n" + 
                "        # @yes (/DYNAMICBASE)\n" + 
                "        'RandomizedBaseAddress': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 4,
            },
            button_height: 1,
          },
          fixedbaseaddress: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @no (/FIXED:NO)\n" + 
                "        'FixedBaseAddress': '1',\n" + 
                "\n" + 
                "        # @yes (/FIXED)\n" + 
                "        'FixedBaseAddress': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 5,
            },
            button_height: 1,
          },
          dataexecutionprevention: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @no (/NXCOMPAT:NO)\n" + 
                "        'DataExecutionPrevention': '1',\n" + 
                "\n" + 
                "        # @yes (/NXCOMPAT)\n" + 
                "        'DataExecutionPrevention': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6,
            },
            button_height: 1,
          },
          turnoffassemblygeneration: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/NOASSEMBLY)\n" + 
                "        'TurnOffAssemblyGeneration': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'TurnOffAssemblyGeneration': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
          supportunloadofdelayloadeddll: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/DELAY:UNLOAD)\n" + 
                "        'SupportUnloadOfDelayLoadedDLL': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'SupportUnloadOfDelayLoadedDLL': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 8,
            },
            button_height: 1,
          },
          importlibrary: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ImportLibrary': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 10,
            },
            button_height: 1,
          },
          mergesections: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'MergeSections': '.rdata=.text',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 11,
            },
            button_height: 1,
          },
          targetmachine: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @1\n" + 
                "        'TargetMachine': '0',\n" + 
                "\n" + 
                "        # MachineX86 (/MACHINE:X86)\n" + 
                "        'TargetMachine': '1',\n" + 
                "\n" + 
                "        # MachineARM (/MACHINE:ARM)\n" + 
                "        'TargetMachine': '3',\n" + 
                "\n" + 
                "        # MachineEBC (/MACHINE:EBC)\n" + 
                "        'TargetMachine': '4',\n" + 
                "\n" + 
                "        # MachineIA64 (/MACHINE:IA64)\n" + 
                "        'TargetMachine': '5',\n" + 
                "\n" + 
                "        # MachineMIPS (/MACHINE:MIPS)\n" + 
                "        'TargetMachine': '7',\n" + 
                "\n" + 
                "        # MachineMIPS16 (/MACHINE:MIPS16)\n" + 
                "        'TargetMachine': '8',\n" + 
                "\n" + 
                "        # MachineMIPSFPU (/MACHINE:MIPSFPU)\n" + 
                "        'TargetMachine': '9',\n" + 
                "\n" + 
                "        # MachineMIPSFPU16 (/MACHINE:MIPSFPU16)\n" + 
                "        'TargetMachine': '10',\n" + 
                "\n" + 
                "        # MachineSH4 (/MACHINE:SH4)\n" + 
                "        'TargetMachine': '14',\n" + 
                "\n" + 
                "        # MachineTHUMB (/MACHINE:THUMB)\n" + 
                "        'TargetMachine': '16',\n" + 
                "\n" + 
                "        # MachineX64 (/MACHINE:X64)\n" + 
                "        'TargetMachine': '17',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "設定なし", en: "Not Set" },
            },
            button_index: {
              default: 12,
            },
            button_height: 1,
          },
          profile: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/PROFILE)\n" + 
                "        'Profile': 'true',\n" + 
                "\n" + 
                "        # @no\n" + 
                "        'Profile': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 13,
            },
            button_height: 1,
          },
          clrthreadattribute: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @1 (/CLRTHREADATTRIBUTE:NONE)\n" + 
                "        'CLRThreadAttribute': '0',\n" + 
                "\n" + 
                "        # @2 (/CLRTHREADATTRIBUTE:MTA)\n" + 
                "        'CLRThreadAttribute': '1',\n" + 
                "\n" + 
                "        # @3 (/CLRTHREADATTRIBUTE:STA)\n" + 
                "        'CLRThreadAttribute': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "既定のスレッド属性", en: "Default threading attribute" },
              "@2": { ja: "MTA スレッド属性", en: "MTA threading attribute" },
              "@3": { ja: "STA スレッド属性", en: "STA threading attribute" },
            },
            button_index: {
              default: 14,
            },
            button_height: 1,
          },
          clrimagetype: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @1\n" + 
                "        'CLRImageType': '0',\n" + 
                "\n" + 
                "        # @2 (/CLRIMAGETYPE:IJW)\n" + 
                "        'CLRImageType': '1',\n" + 
                "\n" + 
                "        # @3 (/CLRIMAGETYPE:PURE)\n" + 
                "        'CLRImageType': '2',\n" + 
                "\n" + 
                "        # @4 (/CLRIMAGETYPE:SAFE)\n" + 
                "        'CLRImageType': '3',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "既定のイメージ タイプ", en: "Default image type" },
              "@2": { ja: "IJW イメージの強制", en: "Force IJW image" },
              "@3": { ja: "純粋 IL イメージの強制", en: "Force Pure IL Image" },
              "@4": { ja: "安全 IL イメージの強制", en: "Force Safe IL Image" },
            },
            button_index: {
              default: 15,
            },
            button_height: 1,
          },
          keycontainer: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'KeyContainer': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 17,
            },
            button_height: 1,
          },
          clrunmanagedcodecheck: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @yes (/CLRUNMANAGEDCODECHECK)\n" + 
                "        'CLRUnmanagedCodeCheck': 'true',\n" + 
                "\n" + 
                "        # @no (/CLRUNMANAGEDCODECHECK:NO)\n" + 
                "        'CLRUnmanagedCodeCheck': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 19,
            },
            button_height: 1,
          },
          errorreporting: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # @1 (/ERRORREPORT:NONE)\n" + 
                "        'ErrorReporting': '0',\n" + 
                "\n" + 
                "        # @2 (/ERRORREPORT:PROMPT)\n" + 
                "        'ErrorReporting': '1',\n" + 
                "\n" + 
                "        # @3 (/ERRORREPORT:QUEUE)\n" + 
                "        'ErrorReporting': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            translations: {
              "@1": { ja: "エラー報告なし", en: "No Error Report" },
              "@2": { ja: "すぐにメッセージを表示", en: "PromptImmediately" },
              "@3": { ja: "次回ログインのためのキュー", en: "Queue For Next Login" },
            },
            button_index: {
              default: 21,
            },
            button_height: 1,
          },
        },
      },
      vclibrariantool_general: {
        button_index: {
          default: 30
        },
        page_height: 526,
        descriptions: {
          export_named_functions: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLibrarianTool': {\n" + 
                "        'ExportNamedFunctions': [\n" + 
                "          'exported_function_1',\n" +
                "          'exported_function_2',\n" +
                "        ],\n" +
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 7,
            },
            button_height: 1,
          },
          additional_dependencies: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLibrarianTool': {\n" + 
                "        'AdditionalDependencies': [\n" + 
                "          'liba',\n" +
                "          'libb',\n" +
                "        ],\n" +
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 1,
            },
            button_height: 1,
          },
          use_uUnicode_response_files: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLibrarianTool': {\n" + 
                "        # @yes\n" +
                "        'UseUnicodeResponseFiles': 'true',\n" + 
                "\n" +
                "        # @no\n" +
                "        'UseUnicodeResponseFiles': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 9,
            },
            button_height: 1,
          },
          suppress_startup_banner: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLibrarianTool': {\n" + 
                "        # @yes (/NOLOGO)\n" +
                "        'SuppressStartupBanner': 'true',\n" + 
                "\n" +
                "        # @no\n" +
                "        'SuppressStartupBanner': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 3
            },
            button_height: 1,
          },
          output_file: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLibrarianTool': {\n" + 
                "        'OutputFile': '$(OutDir)lib\$(ProjectName)$(TargetExt)',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ],
            },
            button_index: {
              default: 0
            },
            button_height: 1,
          },
          additional_library_directories: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLibrarianTool': {\n" + 
                "        'AdditionalLibraryDirectories': [\n" +
                "          'folder1',\n" +
                "          'folder2',\n" +
                "        ],\n" +
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 2
            },
            button_height: 1,
          },
          ignore_specific_default_libraries: {
            description: {
              default: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLibrarianTool': {\n" + 
                "        'IgnoreSpecificDefaultLibraries': [\n" +
                "          'libcmtd.lib',\n" +
                "        ],\n" +
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              default: 6
            },
            button_height: 1,
          },
        },
      },
//      vclibrariantool_alloptions: {
          //             'AdditionalOptions': 'a string1',
//      },
    }
  };

  var page_button_height = 20;
  var page_button_offset = 0;
  var description_button_distance = 21;
  var description_button_height = 19;
  var description_button_offset = 0;
  var config_panel_scale = 0.8;
  var page_width = 702;

  var $language_dropdown = $('#language_dropdown');
  var supported_language_list = ['ja', 'en'];
  for (var i = 0; i < supported_language_list.length; i++) {
    var lang = supported_language_list[i];
    var $li = $('<li></li>');
    var $a = $('<a href="#">' + lang + '</a>');
    $a.attr('href', 'javascript:window.gypcs_load_contents("' + lang + '");');
    $li.append($a);
    $language_dropdown.append($li);
  }

  /**
   * page
   */
  var select_page_by_button = function($button_element) {
    $('.config_property').css('visibility', 'hidden');
    $('.config_property').css('display', 'none');
    $('.page_select_button').removeClass('selected_button');
    var page_id = $button_element.attr('data-gypcs-page');
    $('#' + page_id).css('visibility', 'visible');
    $('#' + page_id).css('display', 'block');
    $('.config_properties').css('overflow', 'hidden');
    $('.config_properties').css('overflow-y', 'auto');
    $button_element.addClass('selected_button');
    select_description_by_button();
  };

  /**
   * description
   */
  var select_description_by_button = function($button_element) {
    $(".description").css('visibility', 'hidden');
    $(".description").css('display', 'none');

    $('.description_select_button').removeClass('selected_button');
    if ($button_element) {
      var page = $button_element.attr('data-gypcs-page')
      var description = $button_element.attr('data-gypcs-description');
      var lang = gypcs.language;
      var contents = null;
      if ('default' in gypcs.pages[page].descriptions[description].description) {
        contents = gypcs.pages[page].descriptions[description].description['default'];
        var translations = null;
        if ('translations' in gypcs.pages[page].descriptions[description]) {
          translations = gypcs.pages[page].descriptions[description]['translations'];
        } else {
          translations = {};
        }
        translations['@yes'] = { ja: 'はい', en: 'Yes' };
        translations['@no'] = { ja: 'いいえ', en: 'No' };
        var original_contents = contents;
        contents = [];
        for (var i = 0; i < original_contents.length; i++) {
          var content = original_contents[i];
          for (var key in translations) {
            var value = translations[key][lang];
            while (true) {
              old = content;
              content = content.replace(key, value);
              if (old == content) {
                break;
              }
            }
          }
          contents.push(content);
        }
      } else {
        contents = gypcs.pages[page].descriptions[description].description[lang];
      }
      $('.description').empty();
      for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        var $pre = $('<pre class="prettyprint">' + content + '</pre>');
        $('.description').append($pre);
      }
      $('.description').css('visibility', 'visible');
      $('.description').css('display', 'block');
      $button_element.addClass('selected_button');

      window.prettyPrint && prettyPrint();
    }
  };

  window.gypcs_load_contents = function(lang) {
    var $config_panel_background = $('.config_panel_background')
    $config_panel_background.attr('src', 'image/' + lang + '/config_panel.png');

    var $config_panel_contents_background_container = $('.config_panel_contents_background_container');
    $config_panel_contents_background_container.empty();

    $config_panel_contents_background = $('<img src="image/' + lang + '/listview.png" class="config_panel_contents_background"/>')
    $config_panel_contents_background_container.append($config_panel_contents_background);

    for (var page_key in gypcs.pages) {
      var page = gypcs.pages[page_key]
      var button_index = null;
      if ('default' in page.button_index) {
        button_index = page.button_index['default'];
      } else {
        button_index = page.button_index[lang];
      }
      var top = (page_button_offset + button_index * page_button_height) * config_panel_scale;
      var $div = $('<div data-gypcs-page="msvs_page_' + page_key + '" class="page_select_button" style="top: ' + top + 'px"></div>');
      $config_panel_contents_background_container.append($div);
    }

    var $config_properties = $('.config_properties');
    $config_properties.empty();
    for (var name in gypcs.pages) {
      var page = gypcs.pages[name];
      var $config_property = $('<div class="config_property" id="msvs_page_' + name + '">');
      
      var height = page.page_height * config_panel_scale - 1;
      var width = page_width * config_panel_scale - 1;
      var $div = $('<div style="width: ' + width + 'px; height: ' + height + 'px; overflow: hidden;">');
      $config_property.append($div);

      var $img = $('<img src="image/' + lang + '/page_' + name + '.png" class="config_property_background"/>');
      $div.append($img);

      for (var description_title in page.descriptions) {
        var description = page.descriptions[description_title];
        var button_index = null;
        if ('default' in description.button_index) {
          button_index = description.button_index['default'];
        } else {
          button_index = description.button_index[lang];
        }
        var button_height = description.button_height;
        var top = (description_button_offset + button_index * description_button_distance) * config_panel_scale;
        var height = button_height * description_button_height * config_panel_scale;
        var $desc_div = $('<div data-gypcs-page="' + name + '" data-gypcs-description="' + description_title + '" class="description_select_button" style="top: ' + top + 'px; height: ' + height + 'px"></div>');
        $config_property.append($desc_div);
      }

      $config_properties.append($config_property);

      gypcs.language = lang;

      $('.description_select_button').click(function(event) {
        select_description_by_button($(event.target));
      });

      $('.page_select_button').click(function(event) {
        select_page_by_button($(event.target));
      });

      // select first page and description
      select_page_by_button($('.page_select_button').first());
      select_description_by_button($('.description_select_button').first());
    }
  };

//  window.gypcs_load_contents('ja');
  window.gypcs_load_contents('en');
});
/*
        {'VCCLCompilerTool': {
            'AdditionalIncludeDirectories': 'folder1;folder2',
            'AdditionalOptions': ['string1', 'string2'],

            // AdditionalOptions に /J が追加される。例: [&apos;-Zm256&apos;] /J 
            'DefaultCharIsUnsigned': 'true',

            'Detect64BitPortabilityProblems': 'true',

            // コード分析 (/analyze) が有効になる
            // http://msdn.microsoft.com/ja-jp/library/microsoft.visualstudio.vcprojectengine.vcclcompilertool.enableprefast.aspx
            // /analyze は x86 コンパイラ用の Enterprise (Team Developer) バージョンでのみ利用できます。
            'EnablePREfast': 'true',

            'PreprocessorDefinitions': 'string1;string2',
            'UseUnicodeResponseFiles': 'true',
         'VCLinkerTool': {
             'AdditionalDependencies_excluded': 'file3',
             'AdditionalOptions': 'a string1',
             'DelaySign': 'true',
             'KeyFile': 'a_file_name',
             'OptimizeForWindows98': '1',
             'ResourceOnlyDLL': 'true',
             'UseUnicodeResponseFiles': 'true',
         },
         'VCMIDLTool': {
             'AdditionalIncludeDirectories': 'folder1;folder2',
             'AdditionalOptions': 'a string1',
             'CPreprocessOptions': 'a string1',
             'DefaultCharType': '1',
             'DLLDataFileName': 'a_file_name',
             'EnableErrorChecks': '1',
             'ErrorCheckAllocations': 'true',
             'ErrorCheckBounds': 'true',
             'ErrorCheckEnumRange': 'true',
             'ErrorCheckRefPointers': 'true',
             'ErrorCheckStubData': 'true',
             'GenerateStublessProxies': 'true',
             'GenerateTypeLibrary': 'true',
             'HeaderFileName': 'a_file_name',
             'IgnoreStandardIncludePath': 'true',
             'InterfaceIdentifierFileName': 'a_file_name',
             'MkTypLibCompatible': 'true',
             'OutputDirectory': 'a string1',
             'PreprocessorDefinitions': 'string1;string2',
             'ProxyFileName': 'a_file_name',
             'RedirectOutputAndErrors': 'a_file_name',
             'StructMemberAlignment': '1',
             'SuppressStartupBanner': 'true',
             'TargetEnvironment': '1',
             'TypeLibraryName': 'a_file_name',
             'UndefinePreprocessorDefinitions': 'string1;string2',
             'ValidateParameters': 'true',
             'WarnAsError': 'true',
             'WarningLevel': '1'},
         'VCResourceCompilerTool': {
             'AdditionalOptions': 'a string1',
             'AdditionalIncludeDirectories': 'folder1;folder2',
             'Culture': '1003',
             'IgnoreStandardIncludePath': 'true',
             'PreprocessorDefinitions': 'string1;string2',
             'ResourceOutputFileName': 'a string1',
             'ShowProgress': 'true',
             'SuppressStartupBanner': 'true',
             'UndefinePreprocessorDefinitions': 'string1;string2'},
         'VCLibrarianTool': {
             'ForceSymbolReferences': 'a string1',
             'IgnoreAllDefaultLibraries': 'true',
             'LinkLibraryDependencies': 'true',
             'ModuleDefinitionFile': 'a_file_name',
         },
         'VCManifestTool': {
             'AdditionalManifestFiles': 'file1;file2',
             'AdditionalOptions': 'a string1',
             'AssemblyIdentity': 'a string1',
             'ComponentFileName': 'a_file_name',
             'DependencyInformationFile': 'a_file_name',
             'GenerateCatalogFiles': 'true',
             'InputResourceManifests': 'a string1',
             'ManifestResourceFile': 'a_file_name',
             'OutputManifestFile': 'a_file_name',
             'RegistrarScriptFile': 'a_file_name',
             'ReplacementsFile': 'a_file_name',
             'SuppressStartupBanner': 'true',
             'TypeLibraryFile': 'a_file_name',
             'UpdateFileHashes': 'truel',
             'UpdateFileHashesSearchPath': 'a_file_name',
             'UseFAT32Workaround': 'true',
             'UseUnicodeResponseFiles': 'true',
             'VerboseOutput': 'true'}},
*/
