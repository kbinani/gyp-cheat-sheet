<?php

$pages = array(
  new Page('general', 2,
    array(
      'type' => new Description(
        array(
"'targets': [
  {
    'type': 'executable',
     ...
  }
]",
"'targets': [
  {
    'type': 'shared_library',
     ...
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
      'CharacterSet': '1'

      # Use Multi-Byte Character Set
      'CharacterSet': '2'
    }
     ...
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
    'msbuild_toolset': 'v110'

    # Visual Studio 2012 - Windows XP
    'msbuild_toolset': 'v110_xp'
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
  new Page('vccompilertools_general', 7,
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

      'warninglevel' => new Description(
        array(
"'targets': [
  {
    'msvs_settings': {
      'VCCLCompilerTool': {
        'WarningLevel': '4' # /W4
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
        'WarnAsError': 'true'
      }
    }
  }
]"
        ),
        7
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
    )
  ),
  new Page('vccompilertools_optimization', 8,
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
  new Page('vccompilertools_preprocessor', 9,
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
  new Page('vccompilertools_codegeneration', 10,
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
  new Page('vccompilertools_language', 11,
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
  new Page('vccompilertools_precompiledheader', 12,
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
]"
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
  new Page('vccompilertools_output', 13,
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
  new Page('vccompilertools_browserinformation', 14,
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
  new Page('vccompilertools_details', 15,
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
    )
  ),
);

/*
        {'VCCLCompilerTool': {
            'AdditionalIncludeDirectories': 'folder1;folder2',
            'AdditionalOptions': ['string1', 'string2'],
            'DefaultCharIsUnsigned': 'true',
            'Detect64BitPortabilityProblems': 'true',
            'EnableIntrinsicFunctions': 'true',
            'EnablePREfast': 'true',
            'ErrorReporting': '1',
            'FavorSizeOrSpeed': '1',
            'GeneratePreprocessedFile': '1',
            'OmitDefaultLibName': 'true',
            'PreprocessorDefinitions': 'string1;string2',
            'SuppressStartupBanner': 'true',
            'UseUnicodeResponseFiles': 'true',
         'VCLinkerTool': {
             'AdditionalDependencies': 'file1;file2',
             'AdditionalDependencies_excluded': 'file3',
             'AdditionalLibraryDirectories': 'folder1;folder2',
             'AdditionalManifestDependencies': 'file1;file2',
             'AdditionalOptions': 'a string1',
             'AddModuleNamesToAssembly': 'file1;file2',
             'AllowIsolation': 'true',
             'AssemblyDebug': '2',
             'AssemblyLinkResource': 'file1;file2',
             'BaseAddress': 'a string1',
             'CLRImageType': '2',
             'CLRThreadAttribute': '2',
             'CLRUnmanagedCodeCheck': 'true',
             'DataExecutionPrevention': '2',
             'DelayLoadDLLs': 'file1;file2',
             'DelaySign': 'true',
             'Driver': '2',
             'EmbedManagedResourceFile': 'file1;file2',
             'EnableCOMDATFolding': '2',
             'EnableUAC': 'true',
             'EntryPointSymbol': 'a string1',
             'ErrorReporting': '2',
             'FixedBaseAddress': '2',
             'ForceSymbolReferences': 'file1;file2',
             'FunctionOrder': 'a_file_name',
             'GenerateDebugInformation': 'true',
             'GenerateManifest': 'true',
             'GenerateMapFile': 'true',
             'HeapCommitSize': 'a string1',
             'HeapReserveSize': 'a string1',
             'IgnoreAllDefaultLibraries': 'true',
             'IgnoreDefaultLibraryNames': 'file1;file2',
             'IgnoreEmbeddedIDL': 'true',
             'IgnoreImportLibrary': 'true',
             'ImportLibrary': 'a_file_name',
             'KeyContainer': 'a_file_name',
             'KeyFile': 'a_file_name',
             'LargeAddressAware': '2',
             'LinkIncremental': '2',
             'LinkLibraryDependencies': 'true',
             'LinkTimeCodeGeneration': '2',
             'ManifestFile': 'a_file_name',
             'MapExports': 'true',
             'MapFileName': 'a_file_name',
             'MergedIDLBaseFileName': 'a_file_name',
             'MergeSections': 'a string1',
             'MidlCommandFile': 'a_file_name',
             'ModuleDefinitionFile': 'a_file_name',
             'OptimizeForWindows98': '1',
             'OptimizeReferences': '2',
             'OutputFile': 'a_file_name',
             'PerUserRedirection': 'true',
             'Profile': 'true',
             'ProfileGuidedDatabase': 'a_file_name',
             'ProgramDatabaseFile': 'a_file_name',
             'RandomizedBaseAddress': '2',
             'RegisterOutput': 'true',
             'ResourceOnlyDLL': 'true',
             'SetChecksum': 'true',
             'ShowProgress': '2',
             'StackCommitSize': 'a string1',
             'StackReserveSize': 'a string1',
             'StripPrivateSymbols': 'a_file_name',
             'SubSystem': '2',
             'SupportUnloadOfDelayLoadedDLL': 'true',
             'SuppressStartupBanner': 'true',
             'SwapRunFromCD': 'true',
             'SwapRunFromNet': 'true',
             'TargetMachine': '2',
             'TerminalServerAware': '2',
             'TurnOffAssemblyGeneration': 'true',
             'TypeLibraryFile': 'a_file_name',
             'TypeLibraryResourceID': '33',
             'UACExecutionLevel': '2',
             'UACUIAccess': 'true',
             'UseLibraryDependencyInputs': 'true',
             'UseUnicodeResponseFiles': 'true',
             'Version': 'a string1'},
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
