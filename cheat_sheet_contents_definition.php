<?php

$pages = array(
  new Page('general', 2, 509,
    array(
      'type' => new Description(
        array(
"'targets': [
  {
    # アプリケーション (.exe)
    'type':  'executable',

    # ダイナミック ライブラリ (.dll)
    'type': 'loadable_module',

    # ダイナミック ライブラリ (.dll)
    'type': 'shared_library',

    # スタティック ライブラリ (.lib)
    'type': 'static_library',

    # ユーティリティ
    'type': 'none',
  }
]"
        ),
        1
      ),
      'characterset' => new Description(
        array(
"'targets': [
  {
    'msvs_configuration_attributes': {
      # Use Unicode Character Set
      'CharacterSet': '1',

      # Use Multi-Byte Character Set
      'CharacterSet': '2',
    }
  }
]"
        ),
        4
      ),
      'toolset' => new Description(
        array(
"'targets': [
  {
    # Visual Studio 2012
    'msbuild_toolset': 'v110',

    # Visual Studio 2012 - Windows XP
    'msbuild_toolset': 'v110_xp',
  }
]"
        ),
        15
      ),

      'targetname' => new Description(
        array(
"'targets': [
  {
    'product_name': 'MyProduct'
  }
]"
        ),
        11
      ),
    )
  ),
  new Page('vccompilertools_general', 7, 509,
    array(
      'includedir' => new Description(
        array(
"'targets': [
  {
    'include_dirs': [
      'C:\SomeLibrary\include'
    ]
  }
]"
        ),
        0
      ),

      'additionalusingdirectories' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'AdditionalUsingDirectories': [
            'folderA',
            'folderB'
        ]
      }
    }
  }
]"
        ),
        1
      ),

      'debuginformationformat' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # C7 compatible (/Z7)
        'DebugInformationFormat': '1'

        # Program Database (/Zi)
        'DebugInformationFormat': '3'

        # Program Database for Edit And Continue (/ZI)
        'DebugInformationFormat': '4'
      }
    }
  }
]"
        ),
        2
      ),

      'suppressstartupbanner' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/nologo)
        'SuppressStartupBanner': 'true',

        # いいえ (/nologo-)
        'SuppressStartupBanner': 'false',
      }
    }
  }
]"
        ),
        5
      ),

      'warninglevel' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # すべての警告を非表示にする (/W0)
        'WarningLevel': '0',

        # レベル 1 (/W1)
        'WarningLevel': '1',

        # レベル 2 (/W2)
        'WarningLevel': '2',

        # レベル 3 (/W3)
        'WarningLevel': '3',

        # レベル 4 (/W4)
        'WarningLevel': '4',
      }
    }
  }
]"
        ),
        6
      ),

      'warnaserror' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/WX)
        'WarnAsError': 'true',

        # いいえ (/WX-)
        'WarnAsError': 'false',
      }
    }
  }
]"
        ),
        7
      ),

    )
  ),

  new Page('vccompilertools_optimization', 8, 509,
    array(
      'optimization' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # 無効 (/Od)
        'Optimization': '0'

        # サイズの最小化 (/O1)
        'Optimization': '1'

        # 実行速度の最小化 (/O2)
        'Optimization': '2'

        # 最大限の最適化 (/Ox)
        'Optimization': '3'
      }
    }
  }
]"
        ),
        0
      ),

      'inlinefunctionexpansion' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # 既定
        'InlineFunctionExpansion': '0'

        # __inline のみ (/Ob1)
        'InlineFunctionExpansion': '1'

        # 拡張可能な関数すべて (/Ob2)
        'InlineFunctionExpansion': '2'
      }
    }
  }
]"
        ),
        1
      ),

      'enableintrinsicfunctions' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Oi)
        'EnableIntrinsicFunctions': 'true',

        # いいえ
        'EnableIntrinsicFunctions': 'false',
      }
    }
  }
]"
        ),
        2
      ),

      'favorsizeorspeed' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # なし
        'FavorSizeOrSpeed': '0',

        # 実行速度を優先 (/Ot)
        'FavorSizeOrSpeed': '1',

        # 実行可能ファイルのサイズを優先 (/Os)
        'FavorSizeOrSpeed': '2',
      }
    }
  }
]"
        ),
        3
      ),

      'omitframepointers' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Oy)
        'OmitFramePointers': 'true'

        # いいえ (/Oy-)
        'OmitFramePointers': 'false'
      }
    }
  }
]"
        ),
        4
      ),

      'enablefibersafeoptimizations' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/GT)
        'EnableFiberSafeOptimizations': 'true'

        # いいえ
        'EnableFiberSafeOptimizations': 'false'
      }
    }
  }
]"
        ),
        5
      ),

      'wholeprogramoptimization' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/GL)
        'WholeProgramOptimization': 'true'

        # いいえ
        'WholeProgramOptimization': 'false'
      }
    }
  }
]"
        ),
        6
      ),
    )
  ),
  new Page('vccompilertools_preprocessor', 9, 509,
    array(
      'defines' => new Description(
        array(
"'targets': [
  {
    'defines': [
        'FOO',
        'BAR'
    ],
  }
]"
        ),
        0
      ),

      'ignorestandardincludepath' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/X)
        'IgnoreStandardIncludePath': 'true'

        # いいえ
        'IgnoreStandardIncludePath': 'false'
      }
    }
  }
]"
        ),
        3
      ),

      'undefineallpreprocessordefinitions' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/u)
        'UndefineAllPreprocessorDefinitions': 'true'

        # いいえ
        'UndefineAllPreprocessorDefinitions': 'false'
      }
    }
  }
]"
        ),
        2
      ),

      'generatepreprocessedfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # ファイルの前処理: いいえ
        # 行番号の前処理の抑制: いいえ
        'GeneratePreprocessedFile': '0',

        # ファイルの前処理: はい (/P)
        # 行番号の前処理の抑制: いいえ
        'GeneratePreprocessedFile': '1',

        # ファイルの前処理: はい (/P)
        # 行番号の前処理の抑制: はい (/EP)
        'GeneratePreprocessedFile': '2',
      }
    }
  }
]"
        ),
        4,
        2
      ),

      'undefinepreprocessordefinitions' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'UndefinePreprocessorDefinitions': [
            'FOO',
            'BAR'
        ]
      }
    }
  }
]"
        ),
        1
      ),

      'keepcomments' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/C)
        'KeepComments': 'true'

        # いいえ
        'KeepComments': 'false'
      }
    }
  }
]"
        ),
        6
      ),
    )
  ),
  new Page('vccompilertools_codegeneration', 10, 509,
    array(
      'stringpooling' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/GF)
        'StringPooling': 'true'

        # いいえ (/GF-)
        'StringPooling': 'false'
      }
    }
  }
]"
        ),
        0
      ),

      'minimalrebuild' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Gm)
        'MinimalRebuild': 'true'

        # いいえ (/Gm-)
        'MinimalRebuild': 'false'
      }
    }
  }
]"
        ),
        1
      ),

      'exceptionhandling' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # いいえ
        'ExceptionHandling': '0'

        # はい (/EHsc)
        'ExceptionHandling': '1'

        # はい - SEH の例外あり (/EHa)
        'ExceptionHandling': '2'
      }
    }
  }
]"
        ),
        2
      ),

      'smallertypecheck' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/RTCc)
        'SmallerTypeCheck': 'true'

        # いいえ
        'SmallerTypeCheck': 'false'
      }
    }
  }
]"
        ),
        3
      ),

      'basicruntimechecks' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # 既定
        'BasicRuntimeChecks': '0'

        # スタック フレーム (/RTCs)
        'BasicRuntimeChecks': '1'

        # 初期化されていない変数 (/RTCu)
        'BasicRuntimeChecks': '2'

        # 両方 (/RTC1、/RTCsu と同等) (/RTC1)
        'BasicRuntimeChecks': '3'
      }
    }
  }
]"
        ),
        4
      ),

      'runtimelibrary' => new Description(
        array(
"'targets': [
  {
    'configurations': {
      'Debug': {
        'msvs_settings': {
          'VCCLCompilerTool': {
            # マルチスレッド (/MT)
            'RuntimeLibrary': '0',

            # マルチスレッド デバッグ (/MTd)
            'RuntimeLibrary': '1',

            # マルチスレッド DLL (/MD)
            'RuntimeLibrary': '2',

            # マルチスレッド デバッグ DLL (/MDd)
            'RuntimeLibrary': '3',
          }
        }
      }
    }
  }
]"
        ),
        5
      ),

      'structmemberalignment' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # 既定
        'StructMemberAlignment': '0',

        # 1 バイト (/Zp1)
        'StructMemberAlignment': '1',

        # 2 バイト (/Zp2)
        'StructMemberAlignment': '2',

        # 4 バイト (/Zp4)
        'StructMemberAlignment': '3',

        # 8 バイト (/Zp8)
        'StructMemberAlignment': '4',

        # 16 バイト (/Zp16)
        'StructMemberAlignment': '5',
      }
    }
  }
]"
        ),
        6
      ),

      'buffersecuritycheck' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/GS)
        'BufferSecurityCheck': 'true',

        # いいえ (/GS-)
        'BufferSecurityCheck': 'false',
      }
    }
  }
]"
        ),
        7
      ),

      'enablefunctionlevellinking' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Gy)
        'EnableFunctionLevelLinking': 'true',

        # いいえ (/Gy-)
        'EnableFunctionLevelLinking': 'false',
      }
    }
  }
]"
        ),
        8
      ),

      'enableenhancedinstructionset' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # 設定なし
        'EnableEnhancedInstructionSet': '0',

        # ストリーミング SIMD 拡張機能 (/arch:SSE)
        'EnableEnhancedInstructionSet': '1',

        # ストリーミング SIMD 拡張機能 2 (/arch:SSE2)
        'EnableEnhancedInstructionSet': '2',

        # Advanced Vector Extensions (/arch:AVX)
        'EnableEnhancedInstructionSet': '3',

        # 拡張命令なし (/arch:IA32)
        'EnableEnhancedInstructionSet': '4',
      }
    }
  }
]"
        ),
        10
      ),

      'floatingpointmodel' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # Precise (/fp:precise)
        'FloatingPointModel': '0',

        # Strict (/fp:strict)
        'FloatingPointModel': '1',

        # Fast (/fp:fast)
        'FloatingPointModel': '2',
      }
    }
  }
]"
        ),
        11
      ),

      'floatingpointexceptions' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/fp:except)
        'FloatingPointExceptions': 'true',

        # いいえ (/fp:except-)
        'FloatingPointExceptions': 'false',
      }
    }
  }
]"
        ),
        12
      ),
    )
  ),
  new Page('vccompilertools_language', 11, 509,
    array(
      'disablelanguageextensions' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Za)
        'DisableLanguageExtensions': 'true',

        # いいえ
        'DisableLanguageExtensions': 'false',
      }
    }
  }
]"
        ),
        0
      ),

      'treatwchartasbuiltintype' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Zc:wchar_t)
        'TreatWChar_tAsBuiltInType': 'true',

        # いいえ (/Zc:wchar_t-)
        'TreatWChar_tAsBuiltInType': 'false',
      }
    }
  }
]"
        ),
        1
      ),

      'forceconformanceinforloopscope' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Zc:forScope)
        'ForceConformanceInForLoopScope': 'true',

        # いいえ (/Zc:forScope-)
        'ForceConformanceInForLoopScope': 'false',
      }
    }
  }
]"
        ),
        2
      ),

      'runtimetypeinfo' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/GR)
        'RuntimeTypeInfo': 'true',

        # いいえ (/GR-)
        'RuntimeTypeInfo': 'false',
      }
    }
  }
]"
        ),
        3
      ),

      'openmp' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/openmp)
        'OpenMP': 'true',

        # いいえ (/openmp-)
        'OpenMP': 'false',
      }
    }
  }
]"
        ),
        4
      ),
    )
  ),
  new Page('vccompilertools_precompiledheader', 12, 509,
    array(
      'useprecompiledheader' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # プリコンパイル済みヘッダーを使用しない
        'UsePrecompiledHeader': '0',

        # 作成 (/Yc)
        'UsePrecompiledHeader': '1',

        # 使用 (/Yu)
        'UsePrecompiledHeader': '2',
      }
    }
  }
]",
"'targets': [
  {
    # stdafx.cpp について、\"作成 (/Yc)\"
    'msvs_precompiled_source': 'stdafx.cpp',
  }
]",
        ),
        0
      ),

      'precompiledheaderthrough' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'PrecompiledHeaderThrough': 'stdafx.h',
      }
    }
  }
]"
        ),
        1
      ),

      'precompiledheaderfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'PrecompiledHeaderFile': '$(IntDir)$(TargetName).pch',
      }
    }
  }
]"
        ),
        2
      ),
    )
  ),
  new Page('vccompilertools_output', 13, 509,
    array(
      'expandattributedsource' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Fx)
        'ExpandAttributedSource': 'true',

        # いいえ
        'ExpandAttributedSource': 'false',
      }
    }
  }
]"
        ),
        0
      ),

      'assembleroutput' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # なし
        'AssemblerOutput': '0',

        # アセンブリ コードのみ (/FA)
        'AssemblerOutput': '1',

        # アセンブリ コード、コンピューター語コード、ソース コード (/FAcs)
        'AssemblerOutput': '2',

        # アセンブリ コードとコンピューター語コード (/FAc)
        'AssemblerOutput': '3',

        # アセンブリ コードとソース コード (/FAs)
        'AssemblerOutput': '4',
      }
    }
  }
]"
        ),
        1
      ),

      'assemblerlistinglocation' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'AssemblerListingLocation': '$(IntDir)',
      }
    }
  }
]"
        ),
        3
      ),

      'objectfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'ObjectFile': '$(IntDir)',
      }
    }
  }
]"
        ),
        4
      ),

      'programdatabasefilename' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'ProgramDataBaseFileName': '$(IntDir)vc$(PlatformToolsetVersion).pdb',
      }
    }
  }
]"
        ),
        5
      ),

      'generatexmldocumentationfiles' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/doc)
        'GenerateXMLDocumentationFiles': 'true',

        # いいえ
        'GenerateXMLDocumentationFiles': 'false',
      }
    }
  }
]"
        ),
        6
      ),

      'xmldocumentationfilename' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'XMLDocumentationFileName': '$(IntDir)',
      }
    }
  }
]"
        ),
        7
      ),
    )
  ),
  new Page('vccompilertools_browserinformation', 14, 509,
    array(
      'browseinformation' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # いいえ
        'BrowseInformation': '0',

        # はい (/FR)
        'BrowseInformation': '1',
      }
    }
  }
]"
        ),
        0
      ),

      'browseinformationfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'BrowseInformationFile': '$(IntDir)',
      }
    }
  }
]"
        ),
        1
      ),
    )
  ),
  new Page('vccompilertools_details', 15, 509,
    array(
      'disablespecificwarnings' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'DisableSpecificWarnings': [
          '4996', // warning C4996
        ],
      }
    }
  }
]"
        ),
        2
      ),

      'callingconversion' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # __cdecl (/Gd)
        'CallingConvention': '0'

        # __fastcall (/Gr)
        'CallingConvention': '1'

        # __stdcall (/Gz)
        'CallingConvention': '2'
      }
    }
  }
]"
        ),
        0
      ),

      'compileas' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # 既定
        'CompileAs': '0',

        # C コードとしてコンパイル (/TC)
        'CompileAs': '1',

        # C++ コードとしてコンパイル (/TP)
        'CompileAs': '2',
      }
    }
  }
]"
        ),
        1
      ),

      'forcedincludefiles' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'ForcedIncludeFiles': [
          'stdafx.h',
        ],
      }
    }
  }
]"
        ),
        3
      ),

      'forcedusingfiles' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'ForcedUsingFiles': [
          'fileA',
          'fileB',
        ],
      }
    }
  }
]"
        ),
        4
      ),

      'vcclcompilertool' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/showIncludes)
        'ShowIncludes': 'true',

        # いいえ
        'ShowIncludes': 'false',
      }
    }
  }
]"
        ),
        5
      ),

      'usefullpaths' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/FC)
        'UseFullPaths': 'true',

        # いいえ
        'UseFullPaths': 'false',
      }
    }
  }
]"
        ),
        6
      ),

      'omitdefaultlibname' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # はい (/Zl)
        'OmitDefaultLibName': 'true',

        # いいえ
        'OmitDefaultLibName': 'false',
      }
    }
  }
]"
        ),
        7
      ),

      'errorreporting' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        # レポートを送信しない (/errorReport:none)
        'ErrorReporting': '0',

        # すぐにメッセージを表示 (/errorReport:prompt)
        'ErrorReporting': '1',

        # 次回ログインのためのキュー (/errorReport:queue)
        'ErrorReporting': '2',
      }
    }
  }
]"
        ),
        8
      ),

    )
  ),

  new Page('vclinkertools_general', 19, 509,
    array(
      'outputfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'OutputFile': '$(OutDir)$(TargetName)$(TargetExt)',
      },
    }
  }
]"
        ),
        0
      ),

      'showprogress' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # 設定なし
        'ShowProgress': '0',

        # 詳細情報をすべて表示 (/VERBOSE)
        'ShowProgress': '1',

        # 検索したライブラリ (/VERBOSE:Lib)
        'ShowProgress': '2',
      },
    }
  }
]"
        ),
        1
      ),

      'version' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'Version': '1.2.3',
      },
    }
  }
]"
        ),
        2
      ),

      'linkincremental' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # いいえ (/INCREMENTAL:NO)
        'LinkIncremental': '1',

        # はい (/INCREMENTAL)
        'LinkIncremental': '2',
      },
    }
  }
]"
        ),
        3
      ),

      'suppressstartupbanner' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/NOLOGO)
        'SuppressStartupBanner': 'true',

        # いいえ
        'SuppressStartupBanner': 'false',
      },
    }
  }
]"
        ),
        4
      ),

      'ignoreimportlibrary' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい
        'IgnoreImportLibrary': 'true',

        # いいえ
        'IgnoreImportLibrary': 'false',
      },
    }
  }
]"
        ),
        5
      ),

      'registeroutput' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい
        'RegisterOutput': 'true',

        # いいえ
        'RegisterOutput': 'false',
      },
    }
  }
]"
        ),
        6
      ),

      'peruserredirection' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい
        'PerUserRedirection': 'true',

        # いいえ
        'PerUserRedirection': 'false',
      },
    }
  }
]"
        ),
        7
      ),

      'additionallibrarydirectories' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'AdditionalLibraryDirectories': [
          'C:\SomeLibrary\lib',
        ],
      },
    }
  }
]"
        ),
        8
      ),

      'linklibrarydependencies' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい
        'LinkLibraryDependencies': 'true',

        # いいえ
        'LinkLibraryDependencies': 'false',
      },
    }
  }
]"
        ),
        9
      ),

      'uselibrarydependencyinputs' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい
        'UseLibraryDependencyInputs': 'true',

        # いいえ
        'UseLibraryDependencyInputs': 'false',
      },
    }
  }
]"
        ),
        10
      ),

    )
  ),

  new Page('vclinkertools_input', 20, 509,
    array(
      'additionaldependencies' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'AdditionalDependencies': [
          'file1',
          'file2',
        ]
      },
    }
  }
]"
        ),
        0
      ),
 

      'ignorealldefaultlibraries' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/NODEFAULTLIB)
        'IgnoreAllDefaultLibraries': 'true',

        # いいえ
        'IgnoreAllDefaultLibraries': 'false',
      },
    }
  }
]"
        ),
        1
      ),


      'ignoredefaultlibrarynames' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'IgnoreDefaultLibraryNames': [
          'file1',
          'file2',
        ],
      },
    }
  }
]"
        ),
        2
      ),

      'moduledefinitionfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'ModuleDefinitionFile': 'a_file_name.def',
      },
    }
  }
]"
        ),
        3
      ),

      'addmodulenamestoassembly' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'AddModuleNamesToAssembly': [
          'file1',
          'file2',
        ],
      },
    }
  }
]"
        ),
        4
      ),

      'embedmanagedresourcefile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'EmbedManagedResourceFile': [
          'file1',
          'file2',
        ],
      },
    }
  }
]"
        ),
        5
      ),

      'forcesymbolreferences' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'ForceSymbolReferences': [
          'file1',
          'file2',
        ],
      },
    }
  }
]"
        ),
        6
      ),

      'delayloaddlls' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'DelayLoadDLLs': [
          'file1',
          'file2',
        ],
      },
    }
  }
]"
        ),
        7
      ),

      'assemblylinkresource' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'AssemblyLinkResource': [
          'file1',
          'file2',
        ],
      },
    }
  }
]"
        ),
        8
      ),
    )
  ),

  new Page('vclinkertools_manifestfile', 21, 509,
    array(
      'generatemanifest' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/MANIFEST)
        'GenerateManifest': 'true',

        # いいえ (/MANIFEST:NO)
        'GenerateManifest': 'false',
      },
    }
  }
]"
        ),
        0
      ),

      'manifestfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'ManifestFile': '$(IntDir)$(TargetName)$(TargetExt).intermediate.manifest',
      },
    }
  }
]"
        ),
        1
      ),

      'additionalmanifestdependencies' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'AdditionalManifestDependencies': [
          'file1',
          'file2',
        ],
      },
    }
  }
]"
        ),
        2
      ),

      'allowisolation' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい
        'AllowIsolation': 'true',

        # いいえ (/ALLOWISOLATION:NO)
        'AllowIsolation': 'false',
      },
    }
  }
]"
        ),
        3
      ),

      'enableuac' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/MANIFESTUAC:)
        'EnableUAC': 'true',

        # いいえ (/MANIFESTUAC:NO)
        'EnableUAC': 'false',
      },
    }
  }
]"
        ),
        4
      ),

      'uacexecutionlevel' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # asInvoker (/level='asInvoker')
        'UACExecutionLevel': '0',

        # highestAvailable (/level='highestAvailable')
        'UACExecutionLevel': '1',

        # requireAdministrator (/level='requireAdministrator')
        'UACExecutionLevel': '2',
      },
    }
  }
]"
        ),
        5
      ),

      'uacuiaccess' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/uiAccess='true')
        'UACUIAccess': 'true',

        # いいえ (/uiAccess='false')
        'UACUIAccess': 'false',
      },
    }
  }
]"
        ),
        6
      ),

    )
  ),

  new Page('vclinkertools_debug', 22, 509,
    array(
      'generatedebuginformation' => new Description(
        array(
"'targets': [
  {
    'configurations': {
      'Debug': {
        'msvs_settings': {
          'VCLinkerTool': {
            # はい (/DEBUG)
            'GenerateDebugInformation': 'true',

            # いいえ
            'GenerateDebugInformation': 'false',
          },
        }
      }
    }
  }
]"
        ),
        0
      ),

      'programdatabasefile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'ProgramDatabaseFile': '$(OutDir)$(TargetName).pdb',
      },
    }
  }
]"
        ),
        1
      ),

      'stripprivatesymbols' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
       'StripPrivateSymbols': 'a_file_name',
      },
    }
  }
]"
        ),
        2
      ),

      'generatemapfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/MAP)
        'GenerateMapFile': 'true',

        # いいえ
        'GenerateMapFile': 'false',
      },
    }
  }
]"
        ),
        3
      ),

      'mapfilename' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'MapFileName': 'a_file_name',
      },
    }
  }
]"
        ),
        4
      ),

      'mapexports' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/MAPINFO:EXPORTS)
        'MapExports': 'true',

        # いいえ
        'MapExports': 'false',
      },
    }
  }
]"
        ),
        5
      ),

      'assemblydebug' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/ASSEMBLYDEBUG)
        'AssemblyDebug': '1',

        # いいえ (/ASSEMBLYDEBUG:DISABLE)
        'AssemblyDebug': '2',
      },
    }
  }
]"
        ),
        6
      ),

    )
  ),


  new Page('vclinkertools_system', 23, 509,
    array(
      'generatedebuginformation' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # 設定なし
        'SubSystem': '0',

        # コンソール (/SUBSYSTEM:CONSOLE)
        'SubSystem': '1',

        # Windows (/SUBSYSTEM:WINDOWS)
        'SubSystem': '2',

        # ネイティブ (/SUBSYSTEM:NATIVE)
        'SubSystem': '3',

        # EFI アプリケーション (/SUBSYSTEM:EFI_APPLICATION)
        'SubSystem': '4',

        # EFI ブート サービス ドライバー (/SUBSYSTEM:EFI_BOOT_SERVICE_DRIVER)
        'SubSystem': '5',

        # EFI ROM (/SUBSYSTEM:EFI_ROM)
        'SubSystem': '6',

        # EFI ランタイム (/SUBSYSTEM:EFI_RUNTIME_DRIVER)
        'SubSystem': '7',

        # WindowsCE
        'SubSystem': '8',
      },
    }
  }
]"
        ),
        0
      ),

      'heapreservesize' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'HeapReserveSize': '1048576', # size in bytes
      },
    }
  }
]"
        ),
        2
      ),

      'heapcommitsize' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'HeapCommitSize': '4096', # size in bytes
      },
    }
  }
]"
        ),
        3
      ),

      'stackreservesize' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'StackReserveSize': '1048576',
      },
    }
  }
]"
        ),
        4
      ),

      'stackcommitsize' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'StackCommitSize': '4096',
      },
    }
  }
]"
        ),
        5
      ),

      'largeaddressaware' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # いいえ (/LARGEADDRESSAWARE:NO)
        'LargeAddressAware': '1',

        # はい (/LARGEADDRESSAWARE)
        'LargeAddressAware': '2',
      },
    }
  }
]"
        ),
        6
      ),

      'terminalserveraware' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # いいえ (/TSAWARE:NO)
        'TerminalServerAware': '1',

        # はい (/TSAWARE)
        'TerminalServerAware': '2',
      },
    }
  }
]"
        ),
        7
      ),

      'swaprunfromcd' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/SWAPRUN:CD)
        'SwapRunFromCD': 'true',

        # いいえ
        'SwapRunFromCD': 'false',
      },
    }
  }
]"
        ),
        8
      ),

      'swaprunfromnet' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/SWAPRUN:NET)
        'SwapRunFromNet': 'true',

        # いいえ
        'SwapRunFromNet': 'false',
      },
    }
  }
]"
        ),
        9
      ),

      'driver' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # 設定なし
        'Driver': '0',

        # ドライバー (/Driver)
        'Driver': '1',

        # UP のみ (/DRIVER:UPONLY)
        'Driver': '2',

        # WDM (/DRIVER:WDM)
        'Driver': '3',
      },
    }
  }
]"
        ),
        10
      ),


    )
  ),

  new Page('vclinkertools_optimization', 24, 509,
    array(
      'optimizereferences' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # いいえ (/OPT:NOREF)
        'OptimizeReferences': '1',

        # はい (/OPT:REF)
        'OptimizeReferences': '2',
      },
    }
  }
]"
        ),
        0
      ),

      'enablecomdatfolding' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # いいえ (/OPT:NOICF)
        'EnableCOMDATFolding': '1',

        # はい (/OPT:ICF)
        'EnableCOMDATFolding': '2',
      },
    }
  }
]"
        ),
        1
      ),

      'functionorder' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'FunctionOrder': 'a_file_name',
      },
    }
  }
]"
        ),
        2
      ),

      'profileguideddatabase' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'ProfileGuidedDatabase': '$(OutDir)$(TargetName).pgd',
      },
    }
  }
]"
        ),
        3
      ),

      'linktimecodegeneration' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # 既定
        'LinkTimeCodeGeneration': '0',

        # リンク時のコード生成を使用 (/LTCG)
        'LinkTimeCodeGeneration': '1',

        # ガイド付き最適化のプロファイル - インストルメント (/LTCG:PGInstrument)
        'LinkTimeCodeGeneration': '2',

        # ガイド付き最適化のプロファイル - 最適化 (/LTCG:PGOptimize)
        'LinkTimeCodeGeneration': '3',

        # ガイド付き最適化のプロファイル - 更新 (/LTCG:PGUpdate)
        'LinkTimeCodeGeneration': '4',
      },
    }
  }
]"
        ),
        4
      ),

    )
  ),

  new Page('vclinkertools_embeddedidl', 25, 509,
    array(
      'midlcommandfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'MidlCommandFile': 'a_file_name',
      },
    }
  }
]"
        ),
        0
      ),

      'ignoreembeddedidl' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/IGNOREIDL)
        'IgnoreEmbeddedIDL': 'true',
        # いいえ
        'IgnoreEmbeddedIDL': 'false',
      },
    }
  }
]"
        ),
        1
      ),

      'mergedidlbasefilename' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'MergedIDLBaseFileName': 'a_file_name',
      },
    }
  }
]"
        ),
        2
      ),

      'typelibraryfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'TypeLibraryFile': 'a_file_name',
      },
    }
  }
]"
        ),
        3
      ),

      'typelibraryresourceid' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'TypeLibraryResourceID': '1',
      },
    }
  }
]"
        ),
        4
      ),

    )
  ),

/*
  new Page('vclinkertools_windowsmetadata', 26,
    array(
      'midlcommandfile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'MidlCommandFile': 'a_file_name',
      },
    }
  }
]"
        ),
        0
      ),
    )
  ),
*/

  new Page('vclinkertools_details', 27, 526,
    array(
      'entrypointsymbol' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'EntryPointSymbol': 'entry_point_symbol',
      },
    }
  }
]"
        ),
        0
      ),

      'setchecksum' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/RELEASE)
        'SetChecksum': 'true',

        # いいえ
        'SetChecksum': 'false',
      },
    }
  }
]"
        ),
        2
      ),

      'baseaddress' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'BaseAddress': '0x400000',
      },
    }
  }
]"
        ),
        3
      ),

      'randomizedbaseaddress' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # いいえ (/DYNAMICBASE:NO)
        'RandomizedBaseAddress': '1',

        # はい (/DYNAMICBASE)
        'RandomizedBaseAddress': '2',
      },
    }
  }
]"
        ),
        4
      ),

      'fixedbaseaddress' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # いいえ (/FIXED:NO)
        'FixedBaseAddress': '1',

        # はい (/FIXED)
        'FixedBaseAddress': '2',
      },
    }
  }
]"
        ),
        5
      ),

      'dataexecutionprevention' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # いいえ (/NXCOMPAT:NO)
        'DataExecutionPrevention': '1',

        # はい (/NXCOMPAT)
        'DataExecutionPrevention': '2',
      },
    }
  }
]"
        ),
        6
      ),

      'turnoffassemblygeneration' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/NOASSEMBLY)
        'TurnOffAssemblyGeneration': 'true',

        # いいえ
        'TurnOffAssemblyGeneration': 'false',
      },
    }
  }
]"
        ),
        7
      ),

      'supportunloadofdelayloadeddll' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/DELAY:UNLOAD)
        'SupportUnloadOfDelayLoadedDLL': 'true',

        # いいえ
        'SupportUnloadOfDelayLoadedDLL': 'false',
      },
    }
  }
]"
        ),
        8
      ),

      'importlibrary' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'ImportLibrary': 'a_file_name',
      },
    }
  }
]"
        ),
        10
      ),

      'mergesections' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'MergeSections': '.rdata=.text',
      },
    }
  }
]"
        ),
        11
      ),

      'targetmachine' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # 設定なし
        'TargetMachine': '0',

        # MachineX86 (/MACHINE:X86)
        'TargetMachine': '1',

        # MachineARM (/MACHINE:ARM)
        'TargetMachine': '3',

        # MachineEBC (/MACHINE:EBC)
        'TargetMachine': '4',

        # MachineIA64 (/MACHINE:IA64)
        'TargetMachine': '5',

        # MachineMIPS (/MACHINE:MIPS)
        'TargetMachine': '7',

        # MachineMIPS16 (/MACHINE:MIPS16)
        'TargetMachine': '8',

        # MachineMIPSFPU (/MACHINE:MIPSFPU)
        'TargetMachine': '9',

        # MachineMIPSFPU16 (/MACHINE:MIPSFPU16)
        'TargetMachine': '10',

        # MachineSH4 (/MACHINE:SH4)
        'TargetMachine': '14',

        # MachineTHUMB (/MACHINE:THUMB)
        'TargetMachine': '16',

        # MachineX64 (/MACHINE:X64)
        'TargetMachine': '17',
      },
    }
  }
]"
        ),
        12
      ),

      'profile' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/PROFILE)
        'Profile': 'true',

        # いいえ
        'Profile': 'false',
      },
    }
  }
]"
        ),
        13
      ),

      'clrthreadattribute' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # 既定のスレッド属性 (/CLRTHREADATTRIBUTE:NONE)
        'CLRThreadAttribute': '0',

        # MTA スレッド属性 (/CLRTHREADATTRIBUTE:MTA)
        'CLRThreadAttribute': '1',

        # STA スレッド属性 (/CLRTHREADATTRIBUTE:STA)
        'CLRThreadAttribute': '2',
      },
    }
  }
]"
        ),
        14
      ),

      'clrimagetype' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # 既定のイメージ タイプ
        'CLRImageType': '0',

        # IJW イメージの強制 (/CLRIMAGETYPE:IJW)
        'CLRImageType': '1',

        # 純粋 IL イメージの強制 (/CLRIMAGETYPE:PURE)
        'CLRImageType': '2',

        # 安全 IL イメージの強制 (/CLRIMAGETYPE:SAFE)
        'CLRImageType': '3',
      },
    }
  }
]"
        ),
        15
      ),

      'keycontainer' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        'KeyContainer': 'a_file_name',
      },
    }
  }
]"
        ),
        17
      ),

      'clrunmanagedcodecheck' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # はい (/CLRUNMANAGEDCODECHECK)
        'CLRUnmanagedCodeCheck': 'true',

        # いいえ (/CLRUNMANAGEDCODECHECK:NO)
        'CLRUnmanagedCodeCheck': 'false',
      },
    }
  }
]"
        ),
        19
      ),

      'errorreporting' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCLinkerTool': {
        # エラー報告なし (/ERRORREPORT:NONE)
        'ErrorReporting': '0',

        # すぐにメッセージを表示 (/ERRORREPORT:PROMPT)
        'ErrorReporting': '1',

        # 次回ログインのためのキュー (/ERRORREPORT:QUEUE)
        'ErrorReporting': '2',
      },
    }
  }
]"
        ),
        21
      ),

    )
  ),

);

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
             'AdditionalDependencies': 'file1;file2',
             'AdditionalLibraryDirectories': 'folder1;folder2',
             'AdditionalOptions': 'a string1',
             'ExportNamedFunctions': 'string1;string2',
             'ForceSymbolReferences': 'a string1',
             'IgnoreAllDefaultLibraries': 'true',
             'IgnoreSpecificDefaultLibraries': 'file1;file2',
             'LinkLibraryDependencies': 'true',
             'ModuleDefinitionFile': 'a_file_name',
             'OutputFile': 'a_file_name',
             'SuppressStartupBanner': 'true',
             'UseUnicodeResponseFiles': 'true'},
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
